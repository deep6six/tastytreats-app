import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './AdminPage.css';  

const AdminPage = () => {
  const [monthlyRevenue] = useState(5000);
  const [dailyRevenue] = useState(550.05);
  const [selectedMonth, setSelectedMonth] = useState('January');
 
  const weeklySchedule = [
    { day: 'Sunday', people: ['Alice', 'Bob'] },
    { day: 'Monday', people: ['Charlie', 'Diana'] },
    { day: 'Tuesday', people: ['Edward', 'Fay'] },
    { day: 'Wednesday', people: ['Grace', 'Henry'] },
    { day: 'Thursday', people: ['Ivy', 'Jack'] },
    { day: 'Friday', people: ['Karen', 'Liam'] },
    { day: 'Saturday', people: ['Mona', 'Nina'] },
  ];

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className="the-page-container">
      
      <div className="sidebar1">
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

      <div className="content">
        <h1 className="admin">Admin Dashboard</h1>

        <div className="revenue-section">
          <h2 className="heads">Monthly Revenue: ${monthlyRevenue}</h2>
          <div className="month-selector">
            <label htmlFor="month-select">Choose Month:</label>
            <select id="month-select" value={selectedMonth} onChange={handleMonthChange}>
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))
              }
            </select>
          </div>
        </div>

        <div className="revenue-section">
          <h2 className="heads">Daily Revenue (Today): ${dailyRevenue}</h2>
        </div>

        <div className="schedule-section">
          <h2 className="heads">Weekly Schedule</h2>
          <div className="schedule-grid">
            {weeklySchedule.map((schedule) => (
              <div key={schedule.day} className="schedule-card">
                <h3 className="heads">{schedule.day}</h3>
                <p>Employees: {schedule.people.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
