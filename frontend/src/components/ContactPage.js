/*
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
*/
import React, { useState } from 'react';
import './ContactPage.css';

// Sample data for employees and schedules
/*const employees = [
  { id: 1, name: 'John Doe', position: 'Cashier' },
  { id: 2, name: 'Jane Smith', position: 'Server' },
  { id: 3, name: 'Mary Johnson', position: 'Chef' },
  { id: 4, name: 'Alice Brown', position: 'Dishwasher' },
  { id: 5, name: 'Bob White', position: 'Manager' }
];*/

// Updated scheduleData to allow multiple employees per day
const scheduleData = [
  { day: 'Monday', shifts: [{ shift: '9am - 5pm', employee: 'John Doe' }, { shift: '1pm - 9pm', employee: 'Jane Smith' }] },
  { day: 'Tuesday', shifts: [{ shift: '9am - 5pm', employee: 'Mary Johnson' }, { shift: '1pm - 9pm', employee: 'Alice Brown' }] },
  { day: 'Wednesday', shifts: [{ shift: '9am - 5pm', employee: 'John Doe' }, { shift: '10am - 4pm', employee: 'Bob White' }] },
  { day: 'Thursday', shifts: [{ shift: '9am - 5pm', employee: 'Jane Smith' }, { shift: '12pm - 8pm', employee: 'Alice Brown' }] },
  { day: 'Friday', shifts: [{ shift: '9am - 5pm', employee: 'Mary Johnson' }, { shift: '12pm - 8pm', employee: 'Bob White' }] },
  { day: 'Saturday', shifts: [{ shift: '9am - 3pm', employee: 'John Doe' }, { shift: '11am - 5pm', employee: 'Alice Brown' }] },
  { day: 'Sunday', shifts: [{ shift: 'Off', employee: 'No one' }] }
];

const monthlyRevenue = [
  { month: 'January', revenue: 20000 },
  { month: 'February', revenue: 18000 },
  { month: 'March', revenue: 25000 },
  { month: 'April', revenue: 23000 },
  { month: 'May', revenue: 22000 },
  { month: 'June', revenue: 21000 },
  { month: 'July', revenue: 24000 },
  { month: 'August', revenue: 26000 },
  { month: 'September', revenue: 25000 },
  { month: 'October', revenue: 27000 },
  { month: 'November', revenue: 28000 },
  { month: 'December', revenue: 30000 }
];

function AdminPage() {
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [revenue, setRevenue] = useState(20000);
  const [currentRevenue, ] = useState(500);

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    const monthData = monthlyRevenue.find((item) => item.month === month);
    setRevenue(monthData.revenue);
  };

  return (
    <div className="admin-page">
      <div className="sidebar">
        <button className="sidebar-button">New Employee Account</button>
        <button className="sidebar-button">Edit Menu</button>
        <button className="sidebar-button">Management</button>
        <button className="sidebar-button">Scheduling</button>
      </div>

      <div className="main-content">
        <div className="revenue-section">
          <select value={selectedMonth} onChange={handleMonthChange} className="month-select">
            {monthlyRevenue.map((item) => (
              <option key={item.month} value={item.month}>
                {item.month}
              </option>
            ))
            }
          </select>
          <h3>Monthly Revenue for {selectedMonth}: ${revenue}</h3>
        </div>
        <div className="revenue-day">
          <h3>Today's Revenue: ${currentRevenue}</h3>
        </div>
        <div className="schedule-section">
          <h3>Current Week's Schedule</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Shift</th>
                <th>Employee</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((schedule, index) => (
                <tr key={index}>
                  <td>{schedule.day}</td>
                  <td>
                    {schedule.shifts.map((shift, i) => (
                      <div key={i}>
                        <strong>{shift.shift}</strong>
                      </div>
                    ))}
                  </td>
                  <td>
                    {schedule.shifts.map((shift, i) => (
                      <div key={i}>
                        {shift.employee}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="schedule-section">
          <h3>Current Week's Schedule</h3>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Shift</th>
                <th>Employee</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((schedule, index) => (
                <tr key={index}>
                  <td>{schedule.day}</td>
                  <td>
                    {schedule.shifts.map((shift, i) => (
                      <div key={i}>
                        <strong>{shift.shift}</strong>
                      </div>
                    ))}
                  </td>
                  <td>
                    {schedule.shifts.map((shift, i) => (
                      <div key={i}>
                        {shift.employee}
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

