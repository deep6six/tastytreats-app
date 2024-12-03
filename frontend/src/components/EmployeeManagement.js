
/*import React, { useState } from 'react';
import './EmployeeManagement.css';

const employees = [
  {
    id: 'E001',
    fullName: 'John Doe',
    contactInfo: 'johndoe@email.com',
    workTitle: 'Cashier',
    hourlyWage: 15,
    hoursWorkedThisWeek: 40,
    totalHoursWorked: 1200,
    availability: ['9am-5pm', '9am-5pm', 'Off', '9am-5pm', '9am-5pm', '9am-3pm', 'Off'],
    schedule: [
      { day: 'Monday', shift: '9am - 5pm' },
      { day: 'Tuesday', shift: '9am - 5pm' },
      { day: 'Thursday', shift: '9am - 5pm' },
      { day: 'Friday', shift: '9am - 5pm' },
      { day: 'Saturday', shift: '9am - 3pm' }
    ]
  },
  {
    id: 'E002',
    fullName: 'Jane Smith',
    contactInfo: 'janesmith@email.com',
    workTitle: 'Server',
    hourlyWage: 12,
    hoursWorkedThisWeek: 30,
    totalHoursWorked: 800,
    availability: ['Off', '10am-6pm', 'Off', '10am-6pm', '10am-6pm', '12pm-8pm', 'Off'],
    schedule: [
      { day: 'Tuesday', shift: '10am - 6pm' },
      { day: 'Thursday', shift: '10am - 6pm' },
      { day: 'Friday', shift: '10am - 6pm' },
      { day: 'Saturday', shift: '12pm - 8pm' }
    ]
  }
];

function EmployeeManagement() {
  const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(0);
  const [showEmployeeList, setShowEmployeeList] = useState(false);

  const employee = employees[currentEmployeeIndex];

  const handleSwitchEmployee = (index) => {
    setCurrentEmployeeIndex(index);
    setShowEmployeeList(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <div className="header">
        <button onClick={handleBack} className="back-btn">← Back</button>
        <button onClick={() => setShowEmployeeList(!showEmployeeList)} className="employee-switch-btn">
          Switch Employee
        </button>
      </div>

      {showEmployeeList && (
        <div className="employee-list">
          {employees.map((emp, index) => (
            <button key={emp.id} onClick={() => handleSwitchEmployee(index)} className="employee-item">
              {emp.fullName}
            </button>
          ))}
        </div>
      )}

      <div className="profile-box">
        <h3>Employee Profile</h3>
        <p><strong>Full Name:</strong> {employee.fullName}</p>
        <p><strong>Employee ID:</strong> {employee.id}</p>
        <p><strong>Contact Info:</strong> {employee.contactInfo}</p>
        <p><strong>Work Title:</strong> {employee.workTitle}</p>
      </div>

      <div className="payroll-box">
        <h3>Payroll</h3>
        <table>
          <thead>
            <tr>
              <th>Current</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.hoursWorkedThisWeek} hours</td>
              <td>{employee.totalHoursWorked} hours</td>
            </tr>
            <tr>
              <td>${employee.hourlyWage}/hr</td>
              <td>${(employee.totalHoursWorked * employee.hourlyWage).toFixed(2)}</td>
            </tr>
            <tr>
              <td>${(employee.hoursWorkedThisWeek * employee.hourlyWage).toFixed(2)}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="availability-box">
        <h3>Availability</h3>
        <table>
          <thead>
            <tr>
              <th>Sunday</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.availability[0]}</td>
              <td>{employee.availability[1]}</td>
              <td>{employee.availability[2]}</td>
              <td>{employee.availability[3]}</td>
              <td>{employee.availability[4]}</td>
              <td>{employee.availability[5]}</td>
              <td>{employee.availability[6]}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="schedule-box">
        <h3>Current Schedule</h3>
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Shift</th>
            </tr>
          </thead>
          <tbody>
            {employee.schedule.map((item, index) => (
              <tr key={index}>
                <td>{item.day}</td>
                <td>{item.shift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeManagement;*/
import React, { useState } from 'react';
import './EmployeeManagement.css';

const employees = [
  {
    id: 'E001',
    fullName: 'John Doe',
    contactInfo: 'johndoe@email.com',
    workTitle: 'Cashier',
    hourlyWage: 15,
    hoursWorkedThisWeek: 40,
    totalHoursWorked: 1200,
    availability: ['9am-5pm', '9am-5pm', 'Off', '9am-5pm', '9am-5pm', '9am-3pm', 'Off'],
    schedule: [
      { day: 'Monday', shift: '9am - 5pm' },
      { day: 'Tuesday', shift: '9am - 5pm' },
      { day: 'Thursday', shift: '9am - 5pm' },
      { day: 'Friday', shift: '9am - 5pm' },
      { day: 'Saturday', shift: '9am - 3pm' }
    ]
  },
  {
    id: 'E002',
    fullName: 'Jane Smith',
    contactInfo: 'janesmith@email.com',
    workTitle: 'Server',
    hourlyWage: 12,
    hoursWorkedThisWeek: 30,
    totalHoursWorked: 800,
    availability: ['Off', '10am-6pm', 'Off', '10am-6pm', '10am-6pm', '12pm-8pm', 'Off'],
    schedule: [
      { day: 'Tuesday', shift: '10am - 6pm' },
      { day: 'Thursday', shift: '10am - 6pm' },
      { day: 'Friday', shift: '10am - 6pm' },
      { day: 'Saturday', shift: '12pm - 8pm' }
    ]
  }
];

function EmployeeManagement() {
  const [currentEmployeeIndex, setCurrentEmployeeIndex] = useState(0);
  const [showEmployeeList, setShowEmployeeList] = useState(false);

  const employee = employees[currentEmployeeIndex];

  const handleSwitchEmployee = (index) => {
    setCurrentEmployeeIndex(index);
    setShowEmployeeList(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="container">
      <div className="sidebar">
        <button className="sidebar-btn">New Employee Account</button>
        <button className="sidebar-btn">Edit Menu</button>
        <button className="sidebar-btn">Scheduling</button>
        <button className="sidebar-btn">Management</button>
      </div>

      <div className="main-content">
        <div className="header">
          <button onClick={handleBack} className="back-btn">← Back</button>
          <button onClick={() => setShowEmployeeList(!showEmployeeList)} className="employee-switch-btn">
            Switch Employee
          </button>
        </div>

        {showEmployeeList && (
          <div className="employee-list">
            {employees.map((emp, index) => (
              <button key={emp.id} onClick={() => handleSwitchEmployee(index)} className="employee-item">
                {emp.fullName}
              </button>
            ))}
          </div>
        )}

        <div className="profile-box">
          <h3>Employee Profile</h3>
          <p><strong>Full Name:</strong> {employee.fullName}</p>
          <p><strong>Employee ID:</strong> {employee.id}</p>
          <p><strong>Contact Info:</strong> {employee.contactInfo}</p>
          <p><strong>Work Title:</strong> {employee.workTitle}</p>
        </div>

        <div className="payroll-box">
          <h3>Payroll</h3>
          <table>
            <thead>
              <tr>
                <th>Current</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{employee.hoursWorkedThisWeek} hours</td>
                <td>{employee.totalHoursWorked} hours</td>
              </tr>
              <tr>
                <td>${employee.hourlyWage}/hr</td>
                <td>${(employee.totalHoursWorked * employee.hourlyWage).toFixed(2)}</td>
              </tr>
              <tr>
                <td>${(employee.hoursWorkedThisWeek * employee.hourlyWage).toFixed(2)}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="availability-box">
          <h3>Availability</h3>
          <table>
            <thead>
              <tr>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{employee.availability[0]}</td>
                <td>{employee.availability[1]}</td>
                <td>{employee.availability[2]}</td>
                <td>{employee.availability[3]}</td>
                <td>{employee.availability[4]}</td>
                <td>{employee.availability[5]}</td>
                <td>{employee.availability[6]}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="schedule-box">
          <h3>Current Schedule</h3>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Shift</th>
              </tr>
            </thead>
            <tbody>
              {employee.schedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.shift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeManagement;