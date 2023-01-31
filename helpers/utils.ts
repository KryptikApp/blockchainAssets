import { NetworkDb, TokenDb } from "@prisma/client";
import {
  ChainData,
  NetworkSecretData,
  TokenData,
  TokenUpload,
} from "../models";
import { NetworkSecretsDict } from "../secrets";

export const addNetworkSecretData = function (network: NetworkDb) {
  let nwSecretData: NetworkSecretData = NetworkSecretsDict[network.ticker];
  if (nwSecretData) {
    network.provider = nwSecretData.provider;
  }
};

/**Returns list of all chain data referenced by tokens.*/
export function getAllChainData(tokens: TokenData[]): ChainData[] {
  const result: ChainData[] = tokens.map((t) => t.chainData).flat();
  return result;
}

/**Turns list of networks into dictionary. Each entry has a ticker as key and a network as a value. */
export function buildNetworkDict(networks: NetworkDb[]) {
  const networkDict: { [ticker: string]: NetworkDb } = {};
  networks.map((n) => {
    networkDict[n.ticker] = n;
  });
  return networkDict;
}

export function formatTokenDataForUpload(token: TokenData): TokenUpload {
  const newToken: TokenUpload = {
    coingeckoId: token.coingeckoId,
    description: token.description,
    decimals: token.decimals,
    hexColor: token.hexColor,
    link: token.link,
    logoURI: token.logoURI,
    name: token.name,
    tags: token.tags,
    ticker: token.ticker,
  };
  return newToken;
}

/** Returns string of the format : "networkTicker:tokenTicker" */
export function createContractId(token: TokenDb, network: NetworkDb) {
  return `${network.ticker}:${token.ticker}`;
}
