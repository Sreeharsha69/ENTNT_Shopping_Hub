import React, { useState } from "react";
import "./style/Laptop.css";

function Laptop() {
  const initialProducts = [
    {
      name: "hp",
      category: "Laptop",
      price: 69999,
      stockQuantity: 35,
    },
    { name: "dell", category: "Laptop", price: 59999, stockQuantity: 42 },
    {
      name: "apple",
      category: "Laptop",
      price: 99999,
      stockQuantity: 55,
    },
    { name: "realme", category: "Laptop", price: 51440, stockQuantity: 280 },
    { name: "asus", category: "Laptop", price: 59599, stockQuantity: 65 },
    { name: "oneplus", category: "Laptop", price: 49999, stockQuantity: 80 },
    {
      name: "leanova",
      category: "Laptop",
      price: 60000,
      stockQuantity: 46,
    },
    { name: "rog", category: "Laptop", price: 55559, stockQuantity: 70 },
  ];
  const [products] = useState(initialProducts);

  return (
    <div className="container">
      <h1>Product Details</h1>
      <br></br>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  <button>Buy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Laptop;
