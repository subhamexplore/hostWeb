import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../Assets/images/zairza_logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={Logo} alt="" className="logo" style={{width:"100px"}}/>
      </div>
      <div className="navbar__right">
        <Link to="/blogs" className="aboutUs-link">
          Blogs
        </Link>
        <Link to="/blog-details" className="aboutUs-link">
          BlogDetails
        </Link>
        <Link to="/projects" className="aboutUs-link">
        Projects
      </Link>
      <Link to="/projectsDetails" className="aboutUs-link">
        ProjectsDetails
      </Link>
      <Link to="/achievements" className="aboutUs-link">
        Achievements
      </Link>
      <Link to="/faq" className="aboutUs-link">
        Faqs
      </Link>
      <Link to="/domains" className="aboutUs-link">
        Domains
      </Link>
        <h4 className="navbar__text">Sign In</h4>
        <MenuIcon className="navbar__menu" />
      </div>
    </div>
  );
};

export default Navbar;
