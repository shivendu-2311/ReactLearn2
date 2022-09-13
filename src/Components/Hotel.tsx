import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IHotel } from "./HotelsSlice";
import './Hotel.css'

import { useContext } from "react";
import { Context } from "./ContextParent";
import { Link,useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// name:string,
// id:string,
// cuisines:string,
// featured_image:string

export default function Hotel(props:IHotel)
{

    const navigate = useNavigate();
   // const flag=useSelector((x:AppState)=>x.flagfavset.flag)
    //const count=useSelector((x:AppState)=>x.hotelfav)
    const user=useContext(Context)
    // {console.log(props.id)}
    // {console.log(count)}
    return(
    
    <div className="hotel_main">
        <Card className="too">
           
            <CardMedia className='img1' image={props.featured_image}></CardMedia>
            <CardContent>
             <Typography variant="h5" data-testid="output1">{props.name}</Typography>
             <Typography variant="body2">{props.cuisines}</Typography>
          
            </CardContent>
         
         <button className="btn1"  onClick={()=>{
            
            if(!user)
            {
                navigate('/login')
                toast.error("You need to Sign in first")
            }
            else
            {

          //  if(!count.includes(props))
            //usedispatch(setHotelFav(props))
            }
        
        
        
        
        }}>
            
            
            
            Star</button>
            <Link to={`hotel/${props.id}`}>
                <button  className="btn2" onClick={()=>{
             
            }}> Visit</button>
            </Link>
         
        </Card>
     
        </div>
 
    )
}