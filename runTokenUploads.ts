import { uploadAllTokenData } from "./helpers/uploadToDb";

export async function uploadTokens(): Promise<boolean> {
  try {
    await uploadAllTokenData();
    return true;
  } catch (e) {
    return false;
  }
}

uploadTokens().then((res) => {
  console.log("FINISHED UPLOADING TOKEN DATA");
  console.log("   ---------   ");
});
