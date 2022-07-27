import { setDoc } from "firebase/firestore";
import erc20Json from "../data/erc20/erc20.json"
import splJson from "../data/spl/spl.json"
import nep141Json from "../data/nep141/nep141.json"
import networkJson from "../data/networks/networks.json"
import tokenJson from "../data/tokens/tokens.json"

import { NetworkDb, TokenData} from "../models";
import { generateDocErc20, generateDocNep141, generateDocNetwork, generateDocSpl, generateDocToken } from "./firebaseHelper";
import { addNetworkSecretData } from "./utils";


export const uploadErc20Data = async function(){
    let erc20DataArray:{erc20Tokens: TokenData[]} = JSON.parse(JSON.stringify(erc20Json));
    for(const ercData of erc20DataArray.erc20Tokens){
        console.log(`Uploading erc20 data for ${ercData.name}...`);
        let docToWrite = generateDocErc20(ercData);
        await setDoc(docToWrite, ercData);
        console.log(`${ercData.symbol} upload complete`);
    }
}

export const uploadSplData = async function(){
    let splDataArray:{splAssets: TokenData[]} = JSON.parse(JSON.stringify(splJson));
    for(const splData of splDataArray.splAssets){
        console.log(`Uploading spl data for ${splData.name}...`);
        let docToWrite = generateDocSpl(splData);
        await setDoc(docToWrite, splData);
        console.log(`${splData.symbol} upload complete`);
    }
}

export const uploadNep141Data = async function(){
    let splDataArray:{nep141Assets: TokenData[]} = JSON.parse(JSON.stringify(nep141Json));
    for(const nep141Data of splDataArray.nep141Assets){
        console.log(`Uploading spl data for ${nep141Data.name}...`);
        let docToWrite = generateDocNep141(nep141Data);
        await setDoc(docToWrite, nep141Data);
        console.log(`${nep141Data.symbol} upload complete`);
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

export const uploadAllTokenData = async function(){
    let tokenDataArray:{tokens: TokenData[]} = JSON.parse(JSON.stringify(tokenJson));
    for(const tokenData of tokenDataArray.tokens){
        console.log(`Uploading token data for ${tokenData.name}...`);
        let docToWrite = generateDocToken(tokenData);
        await setDoc(docToWrite, tokenData);
        console.log(`${tokenData.symbol} upload complete`);
    }
}