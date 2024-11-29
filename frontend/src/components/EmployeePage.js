import React from "react";

function EmployeePage() {
  // Example schedule data
  const schedule = [
    { day: "Mon", hours: "8:00am - 12:00pm" },
    { day: "Tue", hours: "3:00pm - 7:00pm" },
    { day: "Wed", hours: "OFF" },
    { day: "Thu", hours: "8:00am - 12:00pm" },
    { day: "Fri", hours: "OFF" },
    { day: "Sat", hours: "OFF" },
    { day: "Sun", hours: "8:00am - 11:00am" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <header
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#800040",
          color: "white",
        }}
      >
        <h1>Tasty Treat</h1>
        <nav style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
          <button style={navButtonStyle}>Personal Information</button>
          <button style={navButtonStyle}>Update Availability</button>
          <button style={navButtonStyle}>Schedule</button>
          <button style={navButtonStyle}>Update Availability</button>
        </nav>
      </header>

      {/* Employee Info Section */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Schedule: 10/13/24 - 10/19/24</h2>
        <p
          style={{
            display: "inline-block",
            backgroundColor: "#800040",
            color: "white",
            padding: "10px 20px",
            borderRadius: "20px",
          }}
        >
          John Smith
        </p>
      </div>

      {/* Schedule Section */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {schedule.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              backgroundColor: item.hours === "OFF" ? "#ccc" : "#800040",
              color: "white",
              textAlign: "center",
              borderRadius: "10px",
            }}
          >
            <h3>{item.day}</h3>
            <p>{item.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Reusable styles
const navButtonStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "10px 15px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default EmployeePage;