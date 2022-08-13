import { useEffect, useState } from "react";

interface Iusers{
   username: string;
}
export default function UseEffectOne(){
   const [usernames, setUserNames] = useState<string[]>([])
  useEffect(()=>{
  async function api(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const json: Iusers[]= await response.json();
    setUserNames(json.map(x => x.username));}
api()
},[]); 
  
    return(
        <>
        {usernames.map((x,i) => <div key={i}>{x}</div>)}
        </>
    );
}