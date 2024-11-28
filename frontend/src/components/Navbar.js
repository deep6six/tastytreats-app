import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import userImage from "./HeaderBar/User.png"
import Downscroll from "./HeaderBar/akar-icons_three-line-horizontal.png"
import ShoppingCart from "./HeaderBar/Shopping cart.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      
        
      <ul className="navbar-links">
      <div className="logo">
      </div>
        <div class="icon">
        <img src={Downscroll} alt="Downscroll"className="iconr3" />
        <Link to="/login" className="navbar-link1">
        <img src={userImage} alt="User" user-image className="iconr4"/>
        </Link>
      </div>
        <li>
        
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>{" "}
        <li>
          <Link to="/menu" className="navbar-link">
            Menu
          </Link>
        </li>{" "}
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/order" className="navbar-link">
            Order
            </Link>
          <Link to="/login" className="navbar-link">
            Login
 
          </Link>
          <Link to="/review" className="navbar-link">
            CustomerReview
 
          </Link>
        </li>
      
        
      </ul>
     
        
      <div class="right-icon">
      <div class="iconr2">
      <Link to="/menu" className="navbar-link">
    
            Menu
          </Link>
          </div>
      <img src={ShoppingCart} alt="ShoppingCart"className="iconr" />
        
    </div>
    </nav>
  );
};

export default Navbar;
