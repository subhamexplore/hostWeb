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
        <div className="main_navbar" >
          <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left" >
        <Link to="/" onClick={close}><img src={Logo} alt="" className="logo" style={{width:"100px"}}/></Link>
      </div>
      <div className="navbar__right">
        <h4 className="navbar__text">Sign In</h4>
        <MenuIcon className="navbar__menu" onClick={()=>{setShowNav(false);setAnimate(0)}}/>
      </div>
    </div>
    </div>
    </div>
      ):(
    <div className="main_navbar" onClick={close}>
      <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left">
      <Link to="/" onClick={close}><img src={Logo} alt="" className="logo" style={{width:"100px"}}/></Link>
      </div>
    </div>
    <div className={animate===0?"navbar_content":"navbar_content_close"}>
      <div className="close_icon"><CloseIcon className="navbar__menu" onClick={close}/></div>
      <div className="nav-content-container">
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Home</div></Link>
      <Link to="/projects" className="aboutUs-link" onClick={close}><div className="nav-button-content">Projects</div></Link>
      <Link to="/events" className="aboutUs-link" onClick={close}><div className="nav-button-content">Events</div></Link>
      <Link to="/blogs" className="aboutUs-link" onClick={close}><div className="nav-button-content">Blogs</div></Link>
      <Link to="/teams" className="aboutUs-link" onClick={close}><div className="nav-button-content">Members</div></Link>
      <Link to="/alumni" className="aboutUs-link" onClick={close}><div className="nav-button-content">Alumni</div></Link>
      <Link to="/about" className="aboutUs-link" onClick={close}><div className="nav-button-content">About Us</div></Link>
      <Link to="/achievements" className="aboutUs-link" onClick={close}><div className="nav-button-content">Achievements</div></Link>
      <Link to="/domains" className="aboutUs-link" onClick={close}><div className="nav-button-content">Domains</div></Link>
      <Link to="/faq" className="aboutUs-link" onClick={close}><div className="nav-button-content">Faq</div></Link>
      <div className="nav-button-content">Log In/Sign Up</div>
      <div className="navbar-container_down">
        <div className="navbar-container__social_icons">
          <TwitterIcon className="navbar-container__icons" />
        </div>
        <div className="navbar-container__social_icons">
          <MailOutlineIcon className="navbar-container__icons" />
        </div>
        <div className="navbar-container__social_icons">
          <InstagramIcon className="navbar-container__icons" />
        </div>
        <div className="navbar-container__social_icons">
          <GitHubIcon className="navbar-container__icons" />
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
