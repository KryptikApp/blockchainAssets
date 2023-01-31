// a file that batches all uploads
import { uploadNetworkData } from "./helpers/uploadToDb";

export async function uploadNetworks(): Promise<boolean> {
  try {
    await uploadNetworkData();
    return true;
  } catch (e) {
    return false;
  }
}

uploadNetworks().then((res) => {
  console.log("FINISHED UPLOADING NETWORK DATA");
  console.log("   ---------   ");
});
