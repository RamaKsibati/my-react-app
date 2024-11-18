import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cover.css";
import coffeeImage from "../../assets/coffee.png";

function Cover() {
  const navigate = useNavigate();

  return (
    <div className="cover-container">
      <img src={coffeeImage} alt="Coffee" className="cover-image" />
      <div className="cover-text">
        <h1>Time for a coffee break...</h1>
        <p>Your daily dose of fresh brew delivered to your doorstep. Start your coffee journey now!</p>
      </div>
      <button className="cover-button" onClick={() => navigate("/login")}>
        Get started
      </button>
    </div>
  );
}

export default Cover;
