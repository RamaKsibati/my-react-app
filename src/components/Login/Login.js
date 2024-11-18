import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "../../assets/logo.png";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="BrewBuzz Café" className="login-logo" />
        <form>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="login-links">
          <a href="#reset-password">Reset Password</a>
          <a onClick={() => navigate("/create-account")}>Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
