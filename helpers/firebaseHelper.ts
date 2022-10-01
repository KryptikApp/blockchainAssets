import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { collection, doc, DocumentData, DocumentReference, getDocs, getFirestore, setDoc} from 'firebase/firestore';
import { firebaseConfig } from "../secrets";
import { NetworkDb, TokenData } from "../models";
import { getAuth, inMemoryPersistence } from "firebase/auth";
// set your own firebase secrets to access db



const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
firebaseAuth.setPersistence(inMemoryPersistence);
const firestore = getFirestore(firebaseApp);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
export  {
    firestore, firebaseAuth, storage, firebaseApp as default
};


export const generateDocErc20 = function(erc20Data:TokenData):DocumentReference<DocumentData>{
  return doc(firestore, "erc20tokens", erc20Data.symbol);
}

export const generateDocNep141 = function(nep141Data:TokenData):DocumentReference<DocumentData>{
  return doc(firestore, "nep141tokens", nep141Data.symbol);
}

export const generateDocSpl = function(splData:TokenData):DocumentReference<DocumentData>{
  return doc(firestore, "spltokens", splData.symbol);
}

export const generateDocNetwork = function(networkData:NetworkDb){
  return doc(firestore, "networks", networkData.ticker);
}

export const generateDocToken = function(tokenData:TokenData):DocumentReference<DocumentData>{
  return doc(firestore, "tokens", tokenData.symbol);
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
