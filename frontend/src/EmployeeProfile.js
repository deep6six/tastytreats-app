import React from "react";
import "./EmployeeProfile.css";

function EmployeeProfile() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="logo.svg" alt="Tasty Treat Logo" />
          <h1>Tasty Treat</h1>
        </div>
        <nav>
          <button className="menu-btn">Menu</button>
          <button className="cart-btn">Cart</button>
        </nav>
      </header>

      <main>
        <h2>Employee Management</h2>
        <button className="select-employee">Select Employee</button>

        <div className="profile-payroll">
          <section className="profile">
            <h3>Profile Information</h3>
            <p>First Name: [Employee First Name]</p>
            <p>Last Name: [Employee Last Name]</p>
            <p>Employee ID: 0123456789</p>
            <p>Contact: 000-000-0000</p>
            <p>Email: employee@email.com</p>
            <p>Work Title: Head Chef</p>
          </section>

          <section className="payroll">
            <h3>Payroll</h3>
            <p><strong>Current</strong></p>
            <p>Hours Worked: 28</p>
            <p>Hourly Wage: $23.00</p>
            <p>Gross Income: $644.00</p>
            <p><strong>Total</strong></p>
            <p>Hours Worked: 973</p>
            <p>Gross Income: $22,379.00</p>
          </section>
        </div>

        <section className="availability">
          <h3>Availability</h3>
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>8:00 AM</td>
                <td>8:00 PM</td>
              </tr>
              <tr>
                <td>Tuesday</td>
                <td>8:00 AM</td>
                <td>8:00 PM</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="schedule">
          <h3>Current Schedule</h3>
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
                <td>8:00 AM - 4:30 PM</td>
                <td>8:00 AM - 4:30 PM</td>
                <td>8:00 AM - 4:30 PM</td>
                <td>8:00 AM - 4:30 PM</td>
                <td>8:00 AM - 4:30 PM</td>
                <td>OFF</td>
                <td>OFF</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default EmployeeProfile;