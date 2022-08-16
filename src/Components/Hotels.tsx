
import { useEffect } from "react";

interface IHotel{
    name: string;
    cuisines:string;
    featured_image:string;
    id:string;
}
export default function Hotels(){
    useEffect(()=>{
        async function api(){
            const response = await fetch("/hotel.json");
            const json: {restaurant: IHotel}[] = await response.json();
            console.log(json.map(x=>x.restaurant));
        }
  api();
    },[]);
    return <div>Hotels</div>
}