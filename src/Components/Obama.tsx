import { useNavigate } from "react-router-dom"

export default function Obama()
{
    const navigate = useNavigate()
    return(
        <>
        <div>
    hi i am obama
        </div>
        <button onClick={()=> navigate("/sachin")}> go to sachin</button>
            </>
    )
}
