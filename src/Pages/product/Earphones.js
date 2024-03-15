import React, { useState } from "react";
import "./style/earbuds.css";

function Earphones() {
  const initialProducts = [
    {
      name: "Boat",
      category: "Electronic and Gadgets",
      price: 6999,
      stockQuantity: 35,
    },
    {
      name: "apple",
      category: "Electronic and Gadgets",
      price: 15999,
      stockQuantity: 42,
    },
    {
      name: "realme",
      category: "Electronic and Gadgets",
      price: 2199,
      stockQuantity: 55,
    },
    {
      name: "noise",
      category: "Electronic and Gadgets",
      price: 1599,
      stockQuantity: 70,
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
      <br></br>
    </div>
  );
}

export default Earphones;
