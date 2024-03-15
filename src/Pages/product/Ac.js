import React, { useState } from "react";
//import "./style/style.css";

function Ac() {
  const initialProducts = [
    {
      name: "Sony",
      category: "Ac",
      price: 69999,
      stockQuantity: 35,
    },
    { name: "blue star", category: "Ac", price: 59999, stockQuantity: 42 },
    {
      name: "lg",
      category: "Ac",
      price: 21999,
      stockQuantity: 55,
    },

    { name: "kent", category: "Ac", price: 15559, stockQuantity: 70 },
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

export default Ac;
