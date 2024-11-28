import "./App.css";
import api from "./api/axiosConfig";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";

import OrderPage from "./components/OrderPage"; 

import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import CustomerReviewPage from "./components/CustomerReviewPage";
import WriteReview from "./components/WriteReview";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route path="/about" element={<AboutPage/>} />
          <Route path="/order" element={<OrderPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/review" element={<CustomerReviewPage />} />
          <Route path="/reviews" element={<WriteReview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
