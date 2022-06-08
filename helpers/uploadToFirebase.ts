import { setDoc } from "firebase/firestore";
import erc20Json from "../erc20/erc20.json"
import { ERC20Data } from "../models";
import { generateDocErc20 } from "./firebaseHelper";


export const uploadErc20Data = async function(){
    let erc20DataArray:{erc20Tokens: ERC20Data[]} = JSON.parse(JSON.stringify(erc20Json));
    for(const ercData of erc20DataArray.erc20Tokens){
        console.log(`Uploading erc20 data for ${ercData.name}...`);
        let docToWrite = generateDocErc20(ercData);
        await setDoc(docToWrite, ercData);
        console.log(`${ercData.symbol} upload complete`);
    }
}