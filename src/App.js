import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import DietPlan from "./pages/DietPlan"; 
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CCValidation";
import Receipt from "./pages/Receipt"; 
import { getUser, removeUser } from "./repository/credentials";
import { initCart } from './repository/cart';
import "./App.css";

export default function App() {
  const [username, setUsername] = useState(getUser());

  const loginUser = (username) => {
    setUsername(username);
    initCart(); 
  }

  const logoutUser = () => {
    removeUser();
    setUsername(null);
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Header />
        <Navbar username={username} logoutUser={logoutUser}/>
        <main role="main">
          <div className="body">
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/signup" element={<SignUp username={username} loginUser={loginUser}/>} />
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route path="/profile" element={<MyProfile username={username} logoutUser={logoutUser} loginUser={loginUser}/>} />
              <Route path="/diet" element={<DietPlan username={username} logoutUser={logoutUser}/>} />
              <Route path="/shoppingcart" element={<ShoppingCart username={username} logoutUser={logoutUser}/>} />
              <Route path="/checkout" element={<CheckOut username={username} logoutUser={logoutUser}/>} />
              <Route path="/receipt" element={<Receipt username={username} logoutUser={logoutUser}/>} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

