import React, { useState } from "react";
import "./style/bag.css";

function Bags() {
  const initialProducts = [
    { name: "skybags", category: "Bags", price: 5140, stockQuantity: 200 },
    { name: "wildcraft", category: "Bags", price: 5999, stockQuantity: 65 },
    { name: "leanova", category: "Bags", price: 4999, stockQuantity: 80 },
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

export default Bags;
