// a file that batches all uploads 
import { onAuthStateChanged } from "firebase/auth";
import { loginToAccount } from "./helpers/authentication";
import { firebaseAuth } from "./helpers/firebaseHelper";
import { uploadNetworkData} from "./helpers/uploadToFirebase";
import { authEmail, authPassword } from "./secrets";

const uploadNetworks = async function():Promise<boolean>{
    try{
        await uploadNetworkData();
        console.log("FINISHED UPLOADING NETWORK DATA");
        console.log("   ---------   ")
        return true;
    }
    catch(e){
        return false;
    }
}

onAuthStateChanged(firebaseAuth, authStateChanged);

// login and upload!!
loginToAccount(firebaseAuth, authEmail, authPassword).then((loginSuccessful:boolean)=>{
    if(!loginSuccessful){
        console.log("Error authenticating. Exiting upload process.")
        return;
    }
    else{
        console.log("Running upload process via callback...");
    }
})


function authStateChanged(user:any){
    if(user==null) return;
    console.log("current user id:");
    console.log(firebaseAuth.currentUser.uid);
    console.log("-------");
    try{
        uploadNetworks().then((uploadSuccessful:boolean)=>{
            if(uploadSuccessful){
                console.log("UPLOAD COMPLETE!")
            }   
            else{
                return;
            }
        });
    }
    catch(e){
        console.log("Unable to upload docs")
    }
}