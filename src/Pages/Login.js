// Login.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/login.css"; // Import login-specific styles

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/home";
  }

  return (
    <div className="login-container">
      <div className="login-bodydiv">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login Form</h2>
          <br></br>
          <label>Email:</label>
          <input type="email" required></input>
          <br></br>

          <label>Password:</label>
          <input type="password" required></input>
          <br></br>
          <br></br>
          <input type="submit" value="LOGIN"></input>
        </form>
      </div>
    </div>
  );
}
