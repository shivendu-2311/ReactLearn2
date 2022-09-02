import { useState } from "react";

 export default function  Carousel(){
const [current, setCurrent] = useState<number>(0);
const images = [
    "https://media.istockphoto.com/photos/carrousel-at-dusk-picture-id136325144?s=612x612",
    "https://media.istockphoto.com/photos/circus-merrygoround-colourful-picture-id1314492933?b=1&k=20&m=1314492933&s=170667a&w=0&h=TrOK5vgXoiu-9PYGB0_ZB7wUH3nw0ibdJtk2yLO7t9M=",
    "https://media.istockphoto.com/photos/carousel-picture-id146887434?b=1&k=20&m=146887434&s=170667a&w=0&h=rElurDmbyViNIP7AZMBUOaHqvlBdlB_A2JRZf9ZWNNA="
]
return (<>
<img src={images[current]} alt="example"/>
<button disabled={current===0? true: false} onClick={()=>setCurrent(current-1)}>leftt</button>
<button disabled={current === images.length-1 ? true: false} onClick={() =>setCurrent(current+1)}>right</button>
</>);
}