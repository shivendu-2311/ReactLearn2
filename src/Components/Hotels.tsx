
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
          var myHeaders = new Headers();
          myHeaders.append("Content-Type", "application/json");
          myHeaders.append("Origin", "http://localhost:3005");
          
          var raw = JSON.stringify({
            "query": "{\nhotell{\n  id, name,cuisines, featured_image\n}\n}\n"
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
           // redirect: 'follow'
          };
            
            const response = await fetch("https://nodegfgfive.herokuapp.com/graphql", requestOptions)
            const json: {data: {hotell: IHotel[]}}= await response.json();
            dispatch(setHotels(json.data.hotell.map(x => x)));
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
        <TopBar />
        <Grid container spacing={8} className="grid">
            {data.map(renderHotel)}
        </Grid>

        </>
    );
}