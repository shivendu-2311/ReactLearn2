
import { useEffect, useState } from "react";


interface IPhoto{
url:string;
}
export default function UseEffectTwo(){

    const [current, setCurrent] = useState(1);
    const [url, setUrl] = useState<string>('');

    useEffect(()=>{
        async function api(){
            const response = await fetch('https://jsonplaceholder.typicode.com/photos/' +current);
             const json:IPhoto = await response.json();
             setUrl(json.url);
        }
        api();
    }, [current]);
    return(
<>
<button onClick={()=> setCurrent(current-1)}
disabled={current === 1 ? true : false}> left</button>
<button onClick={()=> setCurrent(current+1)}
disabled={current === 5000 ? true : false}> right</button>
{url && <img src={url} alt ={"carousel"}/>}
</>

    );
}