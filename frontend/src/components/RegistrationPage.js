/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/register", {
        username,
        password,
      });
      console.log(response);
      setShowModal(true);
    } catch (err) {
      if (err.response && err.response.data) {
        setError("Registration failed " + err.response.data);
      } else {
        setError("Registration failed " + err.message);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/menu");
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your account has been successfully created</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Form></Form>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegistrationPage;*/
/* Tim's */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from "react-bootstrap";
import "./LoginPage.css"; // Import the same CSS for styling

const RegistrationPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/register", {
        username,
        password,
      });
      console.log(response);
      setShowModal(true);
    } catch (err) {
      if (err.response && err.response.data) {
        setError("Registration failed: " + err.response.data);
      } else {
        setError("Registration failed: " + err.message);
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/menu");
  };

  return (
    <div className="form">
      <div className="loginForm">
        <div className="Box2Log">
          <form className="registerFormLog" onSubmit={handleRegister}>
            <h1 className="Head2Log">Register</h1>
            {error && <p className="error-message">{error}</p>}
            <div className="form-groupLog">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
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
            <div className="form-groupLog">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="input-field"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">Register</button>
          </form>
          <p className="register-linkLog">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your account has been successfully created</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegistrationPage;

