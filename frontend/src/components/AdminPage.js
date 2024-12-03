import React, { useState } from "react";
import "./AdminPage.css";

const monthlyRevenue = {
  January: 12000,
  February: 11000,
  March: 13000,
  April: 14000,
  May: 12500,
  June: 13500,
  July: 14500,
  August: 15000,
  September: 12000,
  October: 14000,
  November: 13000,
  December: 15000
}
const months = Object.keys(monthlyRevenue);

function AdminPage() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const displayRevenue = () => {
    const month = months[currentMonthIndex];
    return `${month}: $${monthlyRevenue[month].toLocaleString()}`;
  }

  const changeMonth = (direction) => {
    setCurrentMonthIndex(prevIndex => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = 11; 
      if (newIndex > 11) newIndex = 0; 
      return newIndex;
    })
  }

  const showPage = (page) => {
    alert(`This is the ${page} page`);
  };

  return (
    <div className="admin-page">
      <div className="sidebar">
        <button onClick={() => showPage('newEmployee')}>New Employee Account</button>
        <button onClick={() => showPage('editMenu')}>Edit Menu</button>
        <button onClick={() => showPage('management')}>Management</button>
        <button onClick={() => showPage('scheduling')}>Scheduling</button>
      </div>

      <div className="main-content">
        <h1>Admin Dashboard</h1>
        <div id="pageDisplay">
          <h2>Monthly Revenue</h2>
          <div className="month-selector">
            <button onClick={() => changeMonth(-1)}>Previous Month</button>
            <button onClick={() => changeMonth(1)}>Next Month</button>
          </div>
          <div className="revenue-display">
            <div id="revenue" className="revenue-data">{displayRevenue()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminPage;

