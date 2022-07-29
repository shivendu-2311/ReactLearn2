import { useNavigate } from "react-router-dom";

export function Sachin()
{
    const navigate = useNavigate();
    return(
        <>
        <div>
            hello bro
        </div>
         <button onClick={()=> navigate("/Donald")}> go to Donald</button>
         </>
        )
}