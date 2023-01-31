// a file that batches all uploads
import { onAuthStateChanged } from "firebase/auth";
import { loginToAccount } from "./helpers/authentication";
import { firebaseAuth } from "./helpers/firebaseHelper";
import { uploadNetworkData } from "./helpers/uploadToDb";

const uploadNetworks = async function (): Promise<boolean> {
  try {
    await uploadNetworkData();
    return true;
  } catch (e) {
    return false;
  }
};

uploadNetworks().then(() => {
  console.log("FINISHED UPLOADING NETWORK DATA");
  console.log("   ---------   ");
});
