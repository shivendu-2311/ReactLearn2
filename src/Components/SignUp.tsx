import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Authentication, { IUser } from "./Authentication";
import { auth } from "./firebaseSetup";

export default function SignUp()
{
    const navigate=useNavigate();
    async function onSubmitClick(data:IUser)
    {
        try {
            const cred = await createUserWithEmailAndPassword(
              auth,
              data.email,
                data.password
               
            );
            // cred.user.photoURL
            updateProfile(cred.user,{displayName:data.name})
            navigate('/')
            console.log(cred);
            return "";
          } catch (error:any) {
            console.log(error.message);
            return "Email is already register with us ,Please sign in "
          }
    }
    
    return(

        <div>
             <Authentication title="Welcome to Sign Up"  isLoginVisible={true} isSignUpVisible={false} isUserNameVisible={true} onSubmitClick={onSubmitClick}></Authentication>
        </div>
    )
}