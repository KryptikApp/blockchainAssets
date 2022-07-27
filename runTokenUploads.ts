// a file that only uploads token data
import { uploadAllTokenData, uploadErc20Data, uploadNep141Data, uploadNetworkData, uploadSplData } from "./helpers/uploadToFirebase";

const uploadTokens = async function(){
    await uploadAllTokenData();
    console.log("FINISHED UPLOADING ALL TOKEN DATA");
    console.log("   ---------   ")
}

uploadTokens().then(()=>{
    console.log("TOKEN UPLOAD COMPLETE!")
});