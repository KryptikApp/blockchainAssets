// a file that batches all uploads 
import { uploadErc20Data } from "./helpers/uploadToFirebase";

uploadErc20Data().then(()=>{
    console.log("FINISHED UPLOADING ERC20 DATA");
});