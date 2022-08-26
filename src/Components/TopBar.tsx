import { AppBar, Button, InputBase } from "@mui/material";
import "./TopBar.css";
import { FaSistrix } from "react-icons/fa";
export default function TopBar() {
  return (
    <AppBar>
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
          <InputBase />
        </div>
        <Button className="btn">Home</Button>
        <Button className="btn">Login</Button>
        <Button className="btn">signup</Button>
      </div>
    </AppBar>
  );
}
