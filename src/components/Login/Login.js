import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo_for__BrewBuzz_Café_-removebg-preview 2.png"; // Import the logo asset

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with", email, password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="BrewBuzz Café" className="login-logo" />
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="login-links">
          <a href="#create-account">Create an account?</a>
          <a href="#reset-password">Reset Password</a>
        </div>
        <footer className="login-footer">
          <a href="#privacy-policy">Privacy Policy</a>
        </footer>
      </div>
    </div>
  );
}

export default Login;
