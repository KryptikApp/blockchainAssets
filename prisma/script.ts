import {
  NetworkDb,
  PrismaClient,
  TokenContract,
  TokenDb,
} from "@prisma/client";
import {
  buildNetworkDict,
  createContractId,
  formatTokenDataForUpload,
  getAllChainData,
} from "../helpers/utils";
import { ChainData, TokenData, TokenUpload } from "../models";

const prisma = new PrismaClient();

export async function addManyNetworks(networks: NetworkDb[]) {
  console.log("here");

  for (const network of networks) {
    try {
      prisma.networkDb.upsert({
        where: { ticker: network.ticker },
        create: network,
        update: network,
      });
    } catch (e) {
      console.error(
        `Unable to create/update network with name: ${network.fullName}. failed with error.`
      );
      console.log(e);
    }
  }
  return;
}

export async function findNetworkByTicker(
  ticker: string
): Promise<NetworkDb | null> {
  const network: NetworkDb = await prisma.networkDb.findUnique({
    where: { ticker: ticker },
  });
  if (!network) {
    return null;
  }
  return network;
}

export async function getAllNetworks() {
  const networks: NetworkDb[] = await prisma.networkDb.findMany();
  return networks;
}

export async function uploadTokenContracts(
  token: TokenDb,
  chainData: ChainData[],
  networkDict: { [ticker: string]: NetworkDb }
): Promise<TokenContract[]> {
  const contractsToReturn: TokenContract[] = [];
  for (const chain of chainData) {
    const address: string = chain.address;
    const networkTicker: string = chain.networkTicker;
    const network: NetworkDb = networkDict[networkTicker];
    if (!network)
      throw new Error(
        `Network with ticker ${networkTicker} is not available in the database. Occured while uploading contracts for ${token.name}`
      );
    const contractId: string = createContractId(token, network);
    // create contract object
    const contractToUpload = {
      address: address,
      contractId: contractId,
      tokenId: token.id,
      networkId: network.id,
    };
    // update or create contract on database
    const contract: TokenContract = await prisma.tokenContract.upsert({
      where: { contractId: contractId },
      create: contractToUpload,
      update: contractToUpload,
    });
    contractsToReturn.push(contract);
  }
  return contractsToReturn;
}

export async function addManyTokens(tokens: TokenData[]) {
  const allNetworks: NetworkDb[] = await getAllNetworks();
  const networkDict: { [ticker: string]: NetworkDb } =
    buildNetworkDict(allNetworks);
  // const formattedTokens: TokenUpload[] = formatTokenDataForUpload(tokens);
  for (const token of tokens) {
    console.log(`Uploading ${token.name}...`);
    // upload or create tokens
    const formattedToken: TokenUpload = formatTokenDataForUpload(token);
    try {
      const tokenAdded: TokenDb = await prisma.tokenDb.upsert({
        where: { ticker: formattedToken.ticker },
        create: formattedToken,
        update: formattedToken,
      });
      await uploadTokenContracts(tokenAdded, token.chainData, networkDict);
      console.log(`${token.name} contracts uploaded.`);
    } catch (e) {
      // TODO: INDICATE CONTRACT UPLOAD MAY HAVE FAILED
      `Unable to upload token with name: ${token.name}. Failed with error:`;
      console.log(e);
    }
  }
}
