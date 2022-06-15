import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { collection, doc, DocumentData, DocumentReference, getDocs, getFirestore, setDoc} from 'firebase/firestore';
import { firebaseConfig } from "../secrets";
import { NetworkDb, TokenData } from "../models";
// set your own firebase secrets to access db



const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
export  {
    firestore, storage, firebaseApp as default
};


export const generateDocErc20 = function(erc20Data:TokenData):DocumentReference<DocumentData>{
  return doc(firestore, "erc20tokens", erc20Data.symbol);
}

export const generateDocSpl = function(splData:TokenData):DocumentReference<DocumentData>{
  return doc(firestore, "spltokens", splData.symbol);
}

export const generateDocNetwork = function(networkData:NetworkDb){
  return doc(firestore, "networks", networkData.ticker);
}

// console logs all data from collection
// useful for copying and pasting into a json file
export const printCollection = async function(collectionName:string){
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    const dataJSONArray = [];
    querySnapshot.forEach((doc) => {
      dataJSONArray.push(doc.data());
    });
    console.log(dataJSONArray);
}
