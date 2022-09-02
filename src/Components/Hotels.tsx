
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./Appstate";
import Hotel from "./Hotel";
import { IHotel, setHotels } from "./HotelsSlice";
import TopBar from "./TopBar";
import "./Hotels.css"

export default function Hotels(){
    const dispatch = useDispatch();
    const data = useSelector((x:AppState) => x.hotelSlice);
    useEffect(()=>{
        async function api(){
            const response = await fetch("/hotel.json");
            const json: {restaurant: IHotel}[] = await response.json();
            dispatch(setHotels(json.map(x => x.restaurant)));
        }
  api();
    },[dispatch]);
    
    function  renderHotel(hotel: IHotel, index: number)
    {
        return <Grid item key = {index}>
            <Hotel {...hotel}/>
        </Grid>
    }
    return (
      <>
        <TopBar/>
        <Grid container spacing={8} className="grid">
            {data.map(renderHotel)}
        </Grid>
        </>
    );
}