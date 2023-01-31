import { addNetworkSecretData } from "./utils";

import networkJson from "../data/networks/networks.json";
import tokenJson from "../data/tokens/tokens.json";
import { NetworkDb } from "@prisma/client";
import { addManyNetworks, addManyTokens } from "../prisma/script";
import { TokenData } from "../models";

export const uploadNetworkData = async function () {
  let networkDataArray: { networks: NetworkDb[] } = JSON.parse(
    JSON.stringify(networkJson)
  );
  const networks: NetworkDb[] = networkDataArray.networks;
  for (const networkData of networkDataArray.networks) {
    console.log(`Adding provider for ${networkData.fullName}...`);
    addNetworkSecretData(networkData);
  }
  const res = await addManyNetworks(networks);
};

export async function uploadAllTokenData() {
  let tokenDataArray: { tokens: TokenData[] } = JSON.parse(
    JSON.stringify(tokenJson)
  );
  const tokens = tokenDataArray.tokens;
  const res = await addManyTokens(tokens);
}
