import React from "react";
//import { Link } from "react-router-dom";
import "../Styles/register.css";
export default function Register() {
  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/login";
  }
  return (
    <div className="registration-container">
      <h2>
        <u>Create Your Account</u>
      </h2>
      <br />

      <form action="register" method="post" onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input type="text" name="username" required />
        <br />
        <br />

        <label>Email:</label>
        <br />
        <input type="email" name="email" required />
        <br />
        <br />

        <label>Password:</label>
        <br />
        <input type="password" name="password" required />
        <br />
        <br />
        <br />

        <label>Gender:</label>
        <input type="radio" name="gender" value="male" />
        <label class="radio">Male</label>
        <input type="radio" name="gender" value="female" />
        <label class="radio">Female</label>
        <input type="radio" name="gender" value="other" />
        <label class="radio">Other</label>
        <br />
        <br />
        <br />

        <label>Address:</label>
        <br />
        <textarea name="address"></textarea>
        <br />
        <br />

        <input class="submit" type="submit" value="REGISTER" />
      </form>
    </div>
  );
}
