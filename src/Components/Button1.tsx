
interface IButton{
text : string;
className: string;
onClick : ()=> void;
}
export default function Button1(props : IButton)
{
return(
    <button className={props.className} onClick ={props.onClick}>{props.text}</button>
);
    
}