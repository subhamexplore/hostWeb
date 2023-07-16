import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Assets/images/zairza_logo.png";
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from "@mui/icons-material/Twitter";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
const Navbar = () => {
  const [showNav, setShowNav]=useState(true);
  const [animate,setAnimate]=useState(0);
  const close=()=>{
    setAnimate(1);
    setTimeout(()=>setShowNav(true),300);
  }
  return (<>
    {
      showNav===true ? (
        <div className="main_navbar">
          <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left">
        <img src={Logo} alt="" className="logo" style={{width:"100px"}}/>
      </div>
      <div className="navbar__right">
        <h4 className="navbar__text">Sign In</h4>
        <MenuIcon className="navbar__menu" onClick={()=>{setShowNav(false);setAnimate(0)}}/>
      </div>
    </div>
    </div>
    </div>
      ):(
    <div className="main_navbar">
      <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left">
        <img src={Logo} alt="" className="logo" style={{width:"100px"}}/>
      </div>
    </div>
    <div className={animate===0?"navbar_content":"navbar_content_close"}>
      <div className="close_icon"><CloseIcon className="navbar__menu" onClick={close}/></div>
      <div className="nav-content-container">
      <div className="nav-button-content">Home</div>
      <div className="nav-button-content">Projects</div>
      <div className="nav-button-content">Events</div>
      <Link to="/blogs" className="aboutUs-link"><div className="nav-button-content">Blogs</div></Link>
      <div className="nav-button-content">Members</div>
      <Link to="/about" className="aboutUs-link"><div className="nav-button-content">About Us</div></Link>
      <div className="nav-button-content">Log In/Sign Up</div>
      <div className="footer-container_down">
        <div className="footer-container__social_icons">
          <TwitterIcon className="footer-container__icons" />
        </div>
        <div className="footer-container__social_icons">
          <MailOutlineIcon className="footer-container__icons" />
        </div>
        <div className="footer-container__social_icons">
          <InstagramIcon className="footer-container__icons" />
        </div>
        <div className="footer-container__social_icons">
          <GitHubIcon className="footer-container__icons" />
        </div>
      </div>
      </div>
    </div>
      </div>
    </div>
      )
    }
    </>
  );
};

export default Navbar;
