import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  // const [username, setUsername] = useState(getUser());

  // const loginUser = (username) => {
  //   setUsername(username);
  // }

  // const logoutUser = () => {
  //   removeUser();
  //   setUsername(null);
  // }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Header />
        <Navbar />
        <main role="main">
          <div className="body">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

