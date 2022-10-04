import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar">
        <Link to="/about" className='aboutUs-link'>About us</Link>
    </div>
  )
}

export default Navbar