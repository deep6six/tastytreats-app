import React from "react";
import Navbar from "./Navbar";
import "./Header.css";


const Header = () => {
  return (
    
    <header className="header">
        
<Navbar  />

    </header>
  );
};

export default Header;



/*import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={`${process.env.PUBLIC_URL}/tastytreatslogo.jpg`}
          alt="TastyTreats LOGO"
        />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;*/
