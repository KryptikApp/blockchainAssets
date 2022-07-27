// a file that batches all uploads 
import { uploadAllTokenData, uploadErc20Data, uploadNep141Data, uploadNetworkData, uploadSplData } from "./helpers/uploadToFirebase";

const uploadAll = async function(){
    // UNCOMMENT FOR INDIVIDUAL FAMILY UPLOADS
    
    // await uploadErc20Data();
    // console.log("FINISHED UPLOADING ERC20 DATA");
    // console.log("   ---------   ")

    // await uploadSplData();
    // console.log("FINISHED UPLOADING SPL DATA");
    // console.log("   ---------   ")

    // await uploadNep141Data();
    // console.log("FINISHED UPLOADING NEP141 DATA");
    // console.log("   ---------   ")

    await uploadNetworkData();
    console.log("FINISHED UPLOADING NETWORK DATA");
    console.log("   ---------   ")

    await uploadAllTokenData();
    console.log("FINISHED UPLOADING ALL TOKEN DATA");
    console.log("   ---------   ")
}

uploadAll().then(()=>{
    console.log("UPLOAD COMPLETE!")
});