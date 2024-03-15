import React, { useState } from "react";
import "./style/watches.css";

function Watches() {
  const initialProducts = [
    {
      name: "firebolt visinory",
      category: "Watch",
      price: 5140,
      stockQuantity: 200,
    },
    { name: "noise pro 3", category: "Watch", price: 1599, stockQuantity: 65 },
    { name: "oneplus", category: "Watch", price: 49999, stockQuantity: 80 },

    { name: "boat", category: "Watch", price: 1559, stockQuantity: 70 },
  ];
  const [products] = useState(initialProducts);

  return (
    <div className="container">
      <h1>Product Details</h1>

      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock Quantity</th>
            <th>Actions</th>
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
  );
}

export default Watches;
