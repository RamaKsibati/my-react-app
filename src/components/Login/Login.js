import React, { useState } from "react";
import API from "../../api"; // Import the Axios instance
import { useNavigate } from "react-router-dom"; // For navigation
import "./login.css"; // Path should match the location of your CSS file



function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login data to the backend
      const response = await API.post("/login", formData);
      
      // Save the token in localStorage
      localStorage.setItem("token", response.data.token);

      alert("Login successful!");
      navigate("/dashboard"); // Redirect to the dashboard or homepage
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "Invalid email or password.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;

