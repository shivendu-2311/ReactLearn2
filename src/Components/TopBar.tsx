import { AppBar, Button, InputBase } from "@mui/material";
import "./TopBar.css";
import { FaSistrix } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./ContextParent";

   
export default function TopBar() {
    const navigator = useNavigate();
    const user=useContext(Context)
   
  return (
    <AppBar className="app">
      <div className="Nav_Item">
        <div className="logo">
          <img
            src="https://rc.jiomeet.com/assets/img/website/website_logo_header_light.svg"
            alt="miss"
          ></img>
        </div>
        <InputBase />
        <div className="search_box_head">
          <FaSistrix></FaSistrix>
          <InputBase className="search_" placeholder="Find Here"/>
        </div>
        {!user &&<Button className="btn" onClick={()=>navigator("/Login")}>Login</Button>}
       {!user && <Button className="btn" onClick={()=>navigator("/SignUp")}>signup</Button>}
        { user &&<Button className="btn" onClick={()=>navigator("/Profile")}>Profile</Button>}
      </div>
    </AppBar>
  );
}
