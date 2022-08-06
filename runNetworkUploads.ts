// a file that batches all uploads 
import { uploadNetworkData} from "./helpers/uploadToFirebase";

const uploadNetworks = async function(){
    await uploadNetworkData();
    console.log("FINISHED UPLOADING NETWORK DATA");
    console.log("   ---------   ")
}

uploadNetworks().then(()=>{
    console.log("NETWORK UPLOAD COMPLETE!")
});