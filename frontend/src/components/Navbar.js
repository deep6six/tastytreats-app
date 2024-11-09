import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
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
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
