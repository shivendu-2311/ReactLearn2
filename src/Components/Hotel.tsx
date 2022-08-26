import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IHotel } from "./HotelsSlice";
import "./Hotel.css"

export default function Hotel(props:IHotel)
{
    
    return(  
    <Card>
    <CardMedia image={props.featured_image} className = "image"/>
    <CardContent>
    <Typography variant="h5">{props.name}</Typography>
    <Typography variant="body1">{props.cuisines}</Typography>
    </CardContent>
</Card>);
}

