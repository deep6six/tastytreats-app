import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig"

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', {
        username,
        password
      });
      const token = response.data.jwtToken;
      console.log('Token:', token); 
      if (token) {
        localStorage.setItem('token', token);
        console.log("Login successful", response.data);
        alert("Login Successful");
        navigate("/"); 
      } else {
        throw new Error("No token received");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;
