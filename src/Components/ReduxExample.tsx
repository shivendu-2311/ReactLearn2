import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./Appstate";

import { setName } from "./NameSlice";

export default function ReduxExample(){
    const dispatch = useDispatch();
    const value = useSelector(( x: AppState) => x.nameSlice.name)
    return(
        <>
        <input type="text" onChange = {e => dispatch(setName(e.target.value))} />
        <label>{value}</label>
        </>
    )
}