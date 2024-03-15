import React, { useState } from "react";
import "./style/bag.css";

function Books() {
  const initialProducts = [
    { name: "Rich Dad", category: "Books", price: 5140, stockQuantity: 200 },
    { name: "Java", category: "Books", price: 5999, stockQuantity: 65 },
    { name: "DBMS", category: "Books", price: 4999, stockQuantity: 80 },
    {
      name: "SqL",
      category: "Books",
      price: 260,
      stockQuantity: 46,
    },
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

export default Books;
