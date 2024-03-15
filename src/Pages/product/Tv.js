import React, { useState } from "react";
import "./style/Tv.css";

function TV() {
  const initialProducts = [
    {
      name: "Oneplus",
      category: "tv",
      price: 9999,
      stockQuantity: 35,
    },
    { name: "akai", category: "tv", price: 5999, stockQuantity: 42 },
    {
      name: "airtel",
      category: "tv",
      price: 21999,
      stockQuantity: 55,
    },
    {
      name: "sony",
      category: "tv",
      price: 26000,
      stockQuantity: 46,
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
  );
}

export default TV;
