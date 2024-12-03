
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './EmployeeManagement.css'; 


const employees = [
  {
    id: '001',
    name: 'John Doe',
    contact: 'john.doe@example.com',
    title: 'Chef',
    weeklyHoursWorked: 40,
    hourlyWage: 20,
    cumulativeHours: 1000,
    availability: {
      Sunday: 'Off',
      Monday: '8:00 AM - 12:00 PM',
      Tuesday: '8:00 AM - 12:00 PM',
      Wednesday: '8:00 AM - 12:00 PM',
      Thursday: 'Off',
      Friday: '8:00 AM - 4:00 PM',
      Saturday: 'Off',
    },
    schedule: {
      Sunday: 'Off',
      Monday: '8 AM - 4 PM',
      Tuesday: '8 AM - 4 PM',
      Wednesday: '8 AM - 4 PM',
      Thursday: 'Off',
      Friday: '8 AM - 4 PM',
      Saturday: 'Off',
    },
  },
  {
    id: '002',
    name: 'Johnny Doe',
    contact: 'johnny.doe@example.com',
    title: 'Chef',
    weeklyHoursWorked: 50,
    hourlyWage: 20,
    cumulativeHours: 1200,
    availability: {
      Sunday: 'Off',
      Monday: '8:00 AM - 12:00 PM',
      Tuesday: '8:00 AM - 12:00 PM',
      Wednesday: '8:00 AM - 12:00 PM',
      Thursday: 'Off',
      Friday: '8:00 AM - 4:00 PM',
      Saturday: 'Off',
    },
    schedule: {
      Sunday: 'Off',
      Monday: '8 AM - 4 PM',
      Tuesday: '8 AM - 4 PM',
      Wednesday: '8 AM - 4 PM',
      Thursday: 'Off',
      Friday: '8 AM - 4 PM',
      Saturday: 'Off',
    },
  },
  {
    id: '003',
    name: 'Bobby Doe',
    contact: 'bobby.doe@example.com',
    title: 'Waiter',
    weeklyHoursWorked: 60,
    hourlyWage: 20,
    cumulativeHours: 1300,
    availability: {
      Sunday: 'Off',
      Monday: '8:00 AM - 12:00 PM',
      Tuesday: '8:00 AM - 12:00 PM',
      Wednesday: '8:00 AM - 12:00 PM',
      Thursday: 'Off',
      Friday: '8:00 AM - 4:00 PM',
      Saturday: 'Off',
    },
    schedule: {
      Sunday: 'Off',
      Monday: '8 AM - 4 PM',
      Tuesday: '8 AM - 4 PM',
      Wednesday: '8 AM - 4 PM',
      Thursday: 'Off',
      Friday: '8 AM - 4 PM',
      Saturday: 'Off',
    },
  }
];

function EmployeeManagement() {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);

  const handleEmployeeChange = (event) => {
    const selected = employees.find((emp) => emp.name === event.target.value);
    setSelectedEmployee(selected);
  };

  const calculateIncome = (hoursWorked, hourlyWage) => {
    return hoursWorked * hourlyWage;
  };

  const calculateGrossIncome = (cumulativeHours, hourlyWage) => {
    return cumulativeHours * hourlyWage;
  };

  return (
    <div className="employee-management">

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

      <div className="content">
        <h1>Employee Management</h1>
        <div className="employee-selector">
          <label htmlFor="employee-select">Select Employee: </label>
          <select id="employee-select" onChange={handleEmployeeChange} value={selectedEmployee.name}>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.name}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>

        <div className="profile-box">
          <h2>Profile Information</h2>
          <p><strong>Name:</strong> {selectedEmployee.name}</p>
          <p><strong>Employee ID:</strong> {selectedEmployee.id}</p>
          <p><strong>Contact Info:</strong> {selectedEmployee.contact}</p>
          <p><strong>Work Title:</strong> {selectedEmployee.title}</p>
        </div>

        <div className="payroll-box">
          <h2>Payroll</h2>
          <div className="current-payroll">
            <h3>Current</h3>
            <p><strong>Hours Worked (This Week):</strong> {selectedEmployee.weeklyHoursWorked} hours</p>
            <p><strong>Hourly Wage:</strong> ${selectedEmployee.hourlyWage}/hr</p>
            <p><strong>Income (This Week):</strong> ${calculateIncome(selectedEmployee.weeklyHoursWorked, selectedEmployee.hourlyWage)}</p>
          </div>
          <div className="total-payroll">
            <h3>Total</h3>
            <p><strong>Cumulative Hours Worked:</strong> {selectedEmployee.cumulativeHours} hours</p>
            <p><strong>Gross Income (Total):</strong> ${calculateGrossIncome(selectedEmployee.cumulativeHours, selectedEmployee.hourlyWage)}</p>
          </div>
        </div>

        <div className="availability-box">
          <h2>Availability</h2>
            <ul>
              {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <li key={day}>
                  {day}: {selectedEmployee.availability[day] ? selectedEmployee.availability[day] : 'Off'}
                </li>
                ))  
              }
            </ul>
        </div>

        <div className="schedule-box">
          <h2>Schedule</h2>
          <ul>
            {Object.keys(selectedEmployee.schedule).map((day) => (
              <li key={day}>
                {day}: {selectedEmployee.schedule[day]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;