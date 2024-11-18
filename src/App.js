import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cover from "./components/Cover/Cover";
import Login from "./components/Login/Login";
import CreateAccount from "./components/CreateAccount/CreateAccount";

function App() {
  return (
    <Router>
      <Routes>
        {/* Cover Page */}
        <Route path="/" element={<Cover />} />
        {/* Login Page */}
        <Route path="/login" element={<Login />} />
        {/* Create Account Page */}
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
