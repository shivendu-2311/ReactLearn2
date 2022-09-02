
import { Fab } from '@mui/material';

import './SignoutPopup.css';
interface Ipop
{
    popup1:boolean,
    setpop1:React.Dispatch<React.SetStateAction<boolean>>;
    signout:()=>any;
}
export default function SignoutPopup(props:Ipop)
{
    
    if(props.popup1)
    return(
        <div className="outer_pop">
            <div className="inner_pop">
                <div className='up'>
                    <h2>Signout</h2>
                    <div>
                    <button onClick={()=>props.setpop1(false)}>c</button>
                    </div>
                </div>
                <div className='mid'>
                    <h3>Are you sure to Sign Out?</h3>
                   
                </div>
                <div className='Down'>
                    <Fab onClick={()=>props.signout()}>Yes</Fab>
                    <Fab onClick={()=>props.setpop1(false)}>No</Fab>
                </div>

            </div>
        </div>
    )
    else
    {
        return(
        <></>)
    }
}