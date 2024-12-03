import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const EmployeeLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Replace this with your actual login validation logic
    if (username === "" || password === "") {
      setError("Please enter both username/email and password.");
    } else if (username !== "exampleUser" || password !== "examplePassword") {
      // Simulate incorrect login details
      setError("Invalid username or password. Please try again.");
    } else {
      // Clear the error and proceed with successful login logic
      setError("");
      alert("Login successful!"); // Replace this with your actual login logic
    }
  };

  return (
    <div className="form">
      <div className="loginForm">
        <div className="Box2Log">
          <form className="registerFormLog" onSubmit={handleLogin}>
            <h1 className="Head2Log">Employee Sign-in</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="form-groupLog">
              <label htmlFor="username">Username/Email</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username or email"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-groupLog">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <input type="hidden" name="role" value="employee" />
            <div className="button-groupLog">
              <button type="button" className="admin-button" onClick={() => navigate('/admin-login')}>Admin</button>
              <button type="button" className="customer-button" onClick={() => navigate('/login')}>Customer</button>
            </div>
            <button type="submit" className="login-button">Log-in</button>
          </form>
          <p className="register-linkLog">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeLoginPage;