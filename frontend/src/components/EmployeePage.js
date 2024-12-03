import React from "react";
import { Link } from "react-router-dom";

function EmployeePage() {
  // Example employee data (this can later be replaced with API calls)
  const employees = [
    { id: 1, name: "John Doe", title: "Manager" },
    { id: 2, name: "Jane Smith", title: "Chef" },
    { id: 3, name: "Alice Johnson", title: "Server" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#800040" }}>Employee Management</h1>

      <div style={{ margin: "20px 0", textAlign: "center" }}>
        <Link
          to="/employee-profile"
          style={{
            padding: "10px 20px",
            backgroundColor: "#800040",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          View Employee Profile
        </Link>
      </div>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#800040", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>ID</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Title</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employee.id}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employee.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{employee.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeePage;