import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./SchedulingPage.css"

function Scheduling() {
const employees = [
    { id: 1, name: "John Doe", available: ["Monday", "Wednesday", "Friday"] },
    { id: 2, name: "Jane Smith", available: ["Sunday", "Tuesday", "Thursday"] },
    { id: 3, name: "Mike Johnson", available: ["Monday", "Tuesday", "Saturday"] },
    { id: 4, name: "Emily Davis", available: ["Wednesday", "Friday", "Saturday"] },
  ];

  const [schedule, setSchedule] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  const [inputCounts] = useState({
    Sunday: 1,
    Monday: 1,
    Tuesday: 1,
    Wednesday: 1,
    Thursday: 1,
    Friday: 1,
    Saturday: 1,
  });

 

  const handleEmployeeChange = (day, inputIndex, employeeId) => {
    const newSchedule = { ...schedule };
    const existingEmployees = newSchedule[day] || [];
    const employeeAlreadyScheduled = existingEmployees.some(
      (scheduledEmployee) => scheduledEmployee.employeeId === employeeId
    );

    if (!employeeAlreadyScheduled) {
      newSchedule[day] = [...existingEmployees, { employeeId, inputIndex }];
      setSchedule(newSchedule);
    }
  };

  const handleRemoveEmployee = (day, employeeId) => {
    setSchedule((prevSchedule) => {
      const newSchedule = { ...prevSchedule };
      newSchedule[day] = newSchedule[day].filter(
        (scheduledEmployee) => scheduledEmployee.employeeId !== employeeId
      );
      return newSchedule;
    });
  };

  const getAvailableEmployees = (day) => {
    return employees.filter(
      (employee) =>
        employee.available.includes(day) &&
        !schedule[day].some(
          (scheduledEmployee) => scheduledEmployee.employeeId === employee.id
        )
    );
  };

  return (
    <div>
      <div className="sidebar3">
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

        <div className="headingTitle">
            <strong><h1>Scheduling</h1></strong>
            <h2 className="heads">Week: 12/1 - 12/7</h2>
            </div>
        <div className="days-grid">
            {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day, index) => (
                <div key={day} className="day-box">
                <h2 className="heads">{day}</h2>
                <div className="employee-selection">
                    {[...Array(inputCounts[day])].map((_, inputIndex) => (
                        <div key={inputIndex} className="employee-select-container">
                            <select
                            onChange={(e) => handleEmployeeChange(day, inputIndex, parseInt(e.target.value))}
                            defaultValue=""
                            >
                            <option value="">Select Employee</option>
                            {getAvailableEmployees(day).map((employee) => (
                                <option key={employee.id} value={employee.id}>
                                    {employee.name}
                                </option>
                            ))}
                            </select>
                        </div>
                    ))}  
                </div>
            <div className="scheduled-employees">
              <h3 className="headThree">Scheduled:</h3>
              {schedule[day].map((scheduledEmployee, index) => {
                const employee = employees.find((emp) => emp.id === scheduledEmployee.employeeId);
                return (
                  <div key={index} className="employee-item">
                    <span>{employee.name}</span>
                    <button
                      className="remove-employee-button"
                      onClick={() => handleRemoveEmployee(day, employee.id)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scheduling;