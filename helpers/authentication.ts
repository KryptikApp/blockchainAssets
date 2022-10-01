import { Auth, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function loginToAccount(authInstance:Auth, email:string, password:string):Promise<boolean>{
    try{
        const createResult = await createUserWithEmailAndPassword(authInstance, email, password);
        return true;
    }
    catch(e){
        try{
            await signInWithEmailAndPassword(authInstance, email, password);
            return true;
          }
          catch(e){
            console.log("Unable to sign in with provided credentials.")
            return false;
        }
    }
}