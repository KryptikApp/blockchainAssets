import { uploadNetworks } from "./runNetworkUploads";
import { uploadTokens } from "./runTokenUploads";

uploadNetworks().then((res) => {
  console.log("FINISHED UPLOADING NETWORK DATA");
  console.log("   ---------   ");
});

uploadTokens().then((res) => {
  console.log("FINISHED UPLOADING TOKEN DATA");
  console.log("   ---------   ");
});
