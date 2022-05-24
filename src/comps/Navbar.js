import React from "react";
import { Link } from "react-router-dom";
import img from "../pages/assets/logo.png";
import Button from "./Button";
function Navbar() {
  return (
    <header className="Header_header__omCkM">
      <div className="topnav">
        <Link to={"/search"} id="nav" className="active">
          {/* <a id="nav" className="active" href=""> */}
          Self-help groups
          {/* </a> */}
        </Link>
        <a id="nav1" href="">
          About Us
        </a>
        <a id="nav2" href="">
          Events
        </a>
        <a id="nav3" href="">
          Contact Us
        </a>
        <a href="" className="butt" id="butt">
          Join now
        </a>
        {/* <div styles={{ position:"absolute",marginLeft: "425px"}}>
        <Button styles={{left: "4025px"}} text={"Join Now"} ></Button>
        </div> */}
        <img style={{marginLeft:"40px"}} src={img} alt="logo" id="nav5" />
      </div>
    </header>
  );
}

export default Navbar;
