
import React from "react";
import { Link } from "react-router-dom"; 
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="whole">
      <h1 className = "contactHead"> Get In Contact</h1>
      <div className="contactCont">
        <div className="contactBox">
          <div><p>Phone Number: (559)123-4567</p></div>
        </div>
        <div className = "emailBox">
          <div><p>Email: tastytreat@yahoo.com</p></div>
        </div>
        <button className = "review">
          <Link to="/review" className="navbar-link">Leave A Review </Link>
          </button>
      </div>
    </div>
    
  )
}


export default ContactPage;
