// a file that batches all uploads 
import { uploadErc20Data, uploadNetworkData, uploadSplData } from "./helpers/uploadToFirebase";

const uploadAll = async function(){
    await uploadErc20Data();
    console.log("FINISHED UPLOADING ERC20 DATA");
    console.log("   ---------   ")

    await uploadSplData();
    console.log("FINISHED UPLOADING SPL DATA");
    console.log("   ---------   ")

    await uploadNetworkData();
    console.log("FINISHED UPLOADING NETWORK DATA");
    console.log("   ---------   ")
}

uploadAll().then(()=>{
    console.log("UPLOAD COMPLETE!")
});