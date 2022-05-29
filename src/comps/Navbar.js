import React from "react";
import { Link } from "react-router-dom";
import { GLOBALS } from "../config";
import img from "../pages/assets/logo.png";
import Button from "./Button";
function Navbar() {
  const formData = JSON.parse(localStorage.getItem("signupFormData"));
  console.log("NAVBAR_LOGS", formData);

  const [loggedIn, setloggedIn] = React.useState(
    formData === null || formData.phone === "" ? false : true
  );

  return (
    // <header className="Header_header__omCkM">
      <div className="topnav">
        <div className="navbar-logo">
          <Link to={"/"}>
            <img
              
              src={img}
              alt="logo"
              className="navbar-logo-img"
            />
          </Link>
        </div>
        <div className='navbar-navs'>
          <Link className="link-nav" to={"/search"}><div className='navbar-item'>Self-Help Groups</div></Link>
          <Link className="link-nav" to={"/"}><div className='navbar-item'>About US</div></Link>
          <Link  className="link-nav" to={"/"}><div className='navbar-item'>Events</div></Link>
          <Link className="link-nav" to={"/"}><div className='navbar-item'>Contact US</div></Link>
          
          {loggedIn ? (
          <Link className="link-nav" to={"/profile"}>
            <div className='navbar-item'>Contact US</div>
          </Link>
        ) : (
          <Link className="link-nav" to={"/auth"}><div className='navbar-item-button'>Join Now</div></Link>
        )}
        </div>
        
      </div>
    // </header>
  );
}

export default Navbar;
