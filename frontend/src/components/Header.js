import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>TastyTreats LOGO</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
