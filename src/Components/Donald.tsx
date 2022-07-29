import { useNavigate } from "react-router-dom"


export default function Donald()
{
    const navigate = useNavigate();
    return(
        <>
       <div>
       hi am donald
       </div>
       <button onClick={()=> navigate("/obama")}> go to obama</button>
       </>

    )
}
