import { createContext, useState } from "react";
import ContextChildren from "./ContextChildren";
export const Context = createContext<string | undefined>(undefined);
export default function  ContextParent(){
    const [text, setText] = useState<string>('')
    return(
    <Context.Provider value={text}>
      <input type={text} onChange={(e)=> setText(e.target.value)}/>
      <ContextChildren/>
    </Context.Provider>    
    );
}
