import React, { useState } from "react";
import "./style/Fans.css";

function Fans() {
  const initialProducts = [
    {
      name: "heven",
      category: "fans",
      price: 6999,
      stockQuantity: 35,
    },
    { name: "heveles", category: "fans", price: 5999, stockQuantity: 42 },
    {
      name: "sony",
      category: "Fans",
      price: 2199,
      stockQuantity: 55,
    },
  ];
  const [products] = useState(initialProducts);

  return (
    <div className="container">
      <h1>Product Details</h1>
      <br></br>
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

export default Fans;
