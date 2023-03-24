import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { FaAlignRight, FaSearch, FaShoppingBag, FaTimesCircle } from "react-icons/fa";


const Header = () => {
    const [open,setOpen]=useState(false);
  return (
    <header class="header-container">
       
        <img src={logo} alt="" />
      
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Blog</Link>
        <Link to="/">Contact</Link>
      </nav>
      <div className="header-btn-container">
       <span><FaShoppingBag /></span>
        <span><FaSearch /></span>
        <button class="header-btn">Appointment</button>
      </div>

      <div className="menu-icon" onClick={()=>setOpen(!open)}>
      {
        open?<FaTimesCircle/>:<FaAlignRight/>
      }
      </div>
    </header>
  );
};

export default Header;
