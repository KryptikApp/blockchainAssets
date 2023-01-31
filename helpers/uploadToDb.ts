import { addNetworkSecretData } from "./utils";

import networkJson from "../data/networks/networks.json";
import { NetworkDb } from "@prisma/client";
import { addManyNetworks } from "../prisma/script";

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

// export const uploadAllTokenData = async function () {

//   let tokenDataArray: { tokens: TokenData[] } = JSON.parse(
//     JSON.stringify(tokenJson)
//   );
//   for (const tokenData of tokenDataArray.tokens) {
//     console.log(`Uploading token data for ${tokenData.name}...`);
//     console.log(`${tokenData.ticker} upload complete`);
//   }
// };
