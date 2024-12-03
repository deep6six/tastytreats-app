import React, { useState } from "react";
import { Link }  from "react-router-dom";
import "./NewEmployee.css"; // Import the CSS file for styling

function NewEmployee() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("New Employee Info:", { email, phone, fullName, workTitle });
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    setEmail("");
    setPhone("");
    setFullName("");
    setWorkTitle("");
  };

  return (
    <div className="new-employee-page">
      
      <div className="sidebar">
        <div className="sidebar-buttons">
            <Link to="/new_employee" className="sidebar-button" >
                <button className="sidebar-button">New Employee Account</button>
            </Link>
            <Link to="/edit_menu">
                <button className="sidebar-button">Edit Menu</button>
            </Link>
            <Link to="/employee_management" >
                <button className="sidebar-button">Management</button>
            </Link>
            <Link to='/scheduling'>
                <button className="sidebar-button">Scheduling</button>
            </Link>
        </div>

        <button className="back-button" onClick={() => window.history.back()}>
          &#8592; Back
        </button>
      </div>

      <div className="form-container">
        <h2 className="Info"><strong>New Employee Information</strong></h2>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <label>Work Title:</label>
          <input
            type="text"
            value={workTitle}
            onChange={(e) => setWorkTitle(e.target.value)}
            required
          />
          <button type="submit">Add Employee</button>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Email sent!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewEmployee;
