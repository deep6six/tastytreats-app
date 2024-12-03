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
import ShoppingCart from "./components/ShoppingCart";
import LoginPage from "./components/LoginPage";
import RegistrationPage from "./components/RegistrationPage";
import CustomerReviewPage from "./components/CustomerReviewPage";
import WriteReview from "./components/WriteReview";
import EmployeeLoginPage from "./components/EmployeeLoginPage";
import AdminLoginPage from "./components/AdminLoginPage";

// Import the new components
import EmployeePage from "./components/EmployeePage";
import EmployeeProfile from "./components/EmployeeProfile";

import AdminPage from "./components/AdminPage"; 
import EmployeeManagement from "./components/EmployeeManagement"
import NewEmployee from "./components/NewEmployee";
import Scheduling from "./components/SchedulingPage";
import EditMenu from "./components/EditMenu";

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
          <Route path="/shoppingcart" element={<ShoppingCart />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/order" element={<OrderPage />} />
        
          <Route path="/login" element={<LoginPage />} />

          <Route path="/admin" element={<AdminPage />} />
          <Route path="/employee_management" element={<EmployeeManagement />} />
          <Route path="/new_employee" element={<NewEmployee />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/edit_menu" element={<EditMenu />} />

          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/review" element={<CustomerReviewPage />} />
          <Route path="/reviews" element={<WriteReview />} />
          <Route path="/employee-login" element={<EmployeeLoginPage />} />
          <Route path="/admin-login" element={<AdminLoginPage />} />

          {/* New Routes */}
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/employee-profile" element={<EmployeeProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;