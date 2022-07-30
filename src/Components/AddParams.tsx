import { useParams } from "react-router-dom"

export default function AddParams()
{
    const {x, y, operator} = useParams<{x: string, y: string, operator: string}>();
    if(x && y)
    {
   let result = 0;
   switch(operator)
{
    case "+" : result = parseInt(x) + parseInt(y); break;
    case "-" : result = parseInt(x) - parseInt(y); break;
    case "*" : result = parseInt(x) * parseInt(y); break;
    default : result = parseInt(x) / parseInt(y); break;
}
      
        return <div>
        {`${x} ${operator ?? "/"} ${y} = ${result}`}
        </div>
    }
    return(
            <div>
            Pls enter valid Number
        </div>
        )
}