import { CircularProgress } from "@mui/material"
interface ILoading
{
    text:string
}
export default function LoadingSpinner(props:ILoading)
{
    return(
        <>
        <h3>{props.text}</h3>
        <CircularProgress></CircularProgress>
        </>
    )
}