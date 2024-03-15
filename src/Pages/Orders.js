import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Order.css";

export default function Order() {
  return (
    <div className="container">
      <h2>
        <u>ORDER Details</u>
      </h2>
      <br></br>
      <br></br>
      <div>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1234</td>
              <td>Harsha</td>
              <td>10-03-2024</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>7894</td>
              <td>deep</td>
              <td>04-03-2024</td>
              <td>Shipped</td>
            </tr>
            <tr>
              <td>7539</td>
              <td>Akki</td>
              <td>06-03-2024</td>
              <td>Delivered</td>
            </tr>
            <tr>
              <td>1547</td>
              <td>sri</td>
              <td>01-03-2024</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>1117</td>
              <td>harini</td>
              <td>01-02-2024</td>
              <td>Canceled</td>
            </tr>
            <tr>
              <td>1247</td>
              <td>Tharun</td>
              <td>15-03-2024</td>
              <td>Returned</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br></br>
      <br></br>
      <button>
        <Link to="/logout" style={{ textDecoration: "none" }}>
          LOGOUT
        </Link>
      </button>
    </div>
  );
}
