import React, { useState } from "react";
import "./CreateAccount.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const navigate = useNavigate();
  const [isCustomer, setIsCustomer] = useState(true); // Toggle state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    zipcode: "",
    agreeToPolicy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${isCustomer ? "Customer" : "Business"} Form submitted:`, formData);
  };

  return (
    <div className="create-account-container">
      <img src={logo} alt="BrewBuzz Café Logo" className="logo" />
      
      {/* Toggle Buttons */}
      <div className="toggle-buttons">
        <button
          className={isCustomer ? "active" : ""}
          onClick={() => setIsCustomer(true)}
        >
          Customer
        </button>
        <button
          className={!isCustomer ? "active" : ""}
          onClick={() => setIsCustomer(false)}
        >
          Business
        </button>
      </div>

      <form onSubmit={handleSubmit} className="create-account-form">
        <div className="name-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleInputChange}
          required
        />
        <div className="address-fields">
          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zipcode"
            onChange={handleInputChange}
            required
          />
        </div>
        <label className="policy-checkbox">
          <input
            type="checkbox"
            name="agreeToPolicy"
            onChange={handleInputChange}
            required
          />
          I agree to the BrewBuzz Customer policy.
        </label>
        <button type="submit" className="create-button">Create</button>
        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="sign-in-link">Sign in</span>
        </p>
      </form>
    </div>
  );
}

export default CreateAccount;
