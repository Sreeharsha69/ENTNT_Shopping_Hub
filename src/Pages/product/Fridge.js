import React, { useState } from "react";
import "./style/Fridge.css";

function Fridge() {
  const initialProducts = [
    {
      name: "lg",
      category: "fridge",
      price: 69999,
      stockQuantity: 35,
    },
    { name: "sony", category: "fridge", price: 5999, stockQuantity: 42 },
    {
      name: "samsung",
      category: "fridge",
      price: 21999,
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

export default Fridge;
