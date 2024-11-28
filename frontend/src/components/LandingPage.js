import React from 'react'
import "./LandingPage.css";
import TTLogo from "./HeaderBar/Logo.png"
import burger1 from "./HeaderBar/Burger 1.png"
function LandingPage() {
  return (

       <div class="burger">
        <div class="container">
        Tasty    <img src={TTLogo} alt="User" user-image className="TTimage"/>    Treats
        </div>
        <div>
        <img src={burger1} alt="User" user-image className="burger"/>
        </div>
        </div>
      
  );
};

export default LandingPage;