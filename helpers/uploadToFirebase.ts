import { setDoc } from "firebase/firestore";
import erc20Json from "../data/erc20/erc20.json"
import networkJson from "../data/networks/networks.json"
import { ERC20Data, NetworkDb } from "../models";
import { generateDocErc20, generateDocNetwork } from "./firebaseHelper";
import { addNetworkSecretData } from "./utils";


export const uploadErc20Data = async function(){
    let erc20DataArray:{erc20Tokens: ERC20Data[]} = JSON.parse(JSON.stringify(erc20Json));
    for(const ercData of erc20DataArray.erc20Tokens){
        console.log(`Uploading erc20 data for ${ercData.name}...`);
        let docToWrite = generateDocErc20(ercData);
        await setDoc(docToWrite, ercData);
        console.log(`${ercData.symbol} upload complete`);
    }
}

export const uploadNetworkData = async function(){
    let networkDataArray:{networks: NetworkDb[]} = JSON.parse(JSON.stringify(networkJson));
    for(const networkData of networkDataArray.networks){
        console.log(`Uploading network data for ${networkData.fullName}...`);
        addNetworkSecretData(networkData);
        let docToWrite = generateDocNetwork(networkData);
        await setDoc(docToWrite, networkData);
        console.log(`${networkData.ticker} upload complete`);
    }
}