import React, { useState } from "react";
import API from "../../api"; // Import the Axios instance
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css";

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    state: "",
    zipcode: "",
    accountType: "Customer", // Default to Customer
    agreeToPolicy: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword, agreeToPolicy } = formData;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!agreeToPolicy) {
      alert("You must agree to the policy!");
      return;
    }

    try {
      // Send registration data to the backend
      console.log("Form data being sent:", formData);

      const response = await API.post("/register", formData);
      console.log("Testing API instance:", API);

      alert(response.data.message);
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred during registration.");
    }
  };

  return (
    <div className="create-account-container">
      <form onSubmit={handleSubmit}>
        {/* Form Fields */}
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
        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="zipcode"
          placeholder="Zipcode"
          onChange={handleInputChange}
        />
        <label>
          <input
            type="checkbox"
            name="agreeToPolicy"
            onChange={handleInputChange}
            required
          />
          I agree to the BrewBuzz Customer policy.
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default CreateAccount;
