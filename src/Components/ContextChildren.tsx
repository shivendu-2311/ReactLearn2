import { useContext } from "react"
import { Context } from "./ContextParent"

export default function ContextChildren(){
const cookie = useContext(Context)
return <label>{cookie}</label>
}

