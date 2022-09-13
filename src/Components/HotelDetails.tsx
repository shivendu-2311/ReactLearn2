import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

import { IHotel } from "./HotelsSlice";
import './HotelDetails.css'
import { Fab } from "@mui/material";
import {toast } from "react-toastify";
import LoadingSpinner from "./LoadingSpinner";

export default function HotelDetails()
{
    const [cusine,setcusine]=useState<string[]>();
    const userParams = useParams<{ hotelID: string }>();
    const navigate=useNavigate();
    const [data,Setdata]=useState<IHotel>();
    const [loading, setLoading] = useState(false);

     console.log(userParams.hotelID)
    useEffect(()=>{
        async function api()
        {
        setLoading(true)

        const respose=await fetch(`https://nodegfg.herokuapp.com/${userParams.hotelID}`)
        const json:IHotel= await respose.json()
        Setdata(json)
        const str=json.cuisines;
        const new_str=str.split(",");
        setcusine(new_str)
        console.log(json)
        console.log('test')
        setLoading(false)
        }
        api();
    },[userParams])
    if(!loading)
    return(
        <div className="main_detail">
            
        <h1>Welcome to {data?.name}</h1>
        {/* <h2>Creatting call with respect to Hotel Id's</h2> */}
        <img src={data?.featured_image} alt='hello'/>
        <div>
        <div className="cusines">
            <h4>Our Specility:</h4>
          
            {cusine?.map((item)=>{
                return(
                  
                    <p>{item}</p>
                   
                )
            })}
             </div>
        </div>
        <div className="btn_main">
        <Fab variant="extended" className="btn_detail" onClick={()=>toast.success('comming soon')}>Book Your Order</Fab>
        <Fab variant="extended" className="btn_detail" onClick={()=>navigate('/')}>Home</Fab>
        </div>
        {/* <p>{userParams.hotelID}</p> */}
        </div>
    )
    else
    {return(
         <LoadingSpinner text='loading data'></LoadingSpinner>)
    }
}