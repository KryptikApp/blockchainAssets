import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { doc, DocumentData, DocumentReference, getFirestore, setDoc} from 'firebase/firestore';
import { firebaseConfig } from "../secrets";
import { ERC20Data } from "../models";
// set your own firebase secrets to access db



const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(firebaseApp);
export  {
    firestore, storage, firebaseApp as default
};


export const generateDocErc20 = function(erc20Data:ERC20Data):DocumentReference<DocumentData>{
  return doc(firestore, "erc20tokens", erc20Data.symbol);
}
