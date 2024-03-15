import React from "react";
import "../Styles/index.css";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="bodydiv">
      <div>
        <h2>WELCOME to ENTNT E-Commerce webiste</h2>
      </div>
      <div className="button-wrapper">
        <button>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            LOGIN
          </Link>
        </button>
        <br></br>
        <br></br>
        <button>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            REGISTER
          </Link>
        </button>
      </div>
    </div>
  );
}
