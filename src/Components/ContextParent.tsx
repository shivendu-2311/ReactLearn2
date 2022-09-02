import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useState } from "react"

import { auth } from "./firebaseSetup";
interface Iprops
{
    children:React.ReactNode
}
export const Context=createContext<any|null>(null)
export default function ContextParent(props:Iprops)
{
    onAuthStateChanged(auth, (currentUser:User|null) => {
        setUser(currentUser);
      });
    
    const [user,setUser]=useState<User|null>(null)
    return(
        <Context.Provider value={user}>
            {props.children}
          
        </Context.Provider>
    )

    
}