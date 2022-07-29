import { useNavigate } from "react-router-dom"


export default function Home()

{
    const navigate = useNavigate();
    return(
        <>
       <div>
       You are on home page now
       </div>
       <button onClick={()=> navigate("/obama")}> go to obama</button>
       </>

    )
}
