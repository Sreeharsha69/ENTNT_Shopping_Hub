import React, { useState } from "react";

import "./style/Mobile.css";

function Mobiles() {
  const initialProducts = [
    {
      name: "i phone 12",
      category: "Mobile",
      price: 39999,
      stockQuantity: 35,
    },
    { name: "i phone13 ", category: "Mobile", price: 54999, stockQuantity: 42 },

    {
      name: "i phone 13 pro",
      category: "Mobile",
      price: 51140,
      stockQuantity: 200,
    },
    {
      name: "i phone 14 pro",
      category: "Mobile",
      price: 55599,
      stockQuantity: 65,
    },
    {
      name: "i phone15 pro",
      category: "Mobile",
      price: 69999,
      stockQuantity: 80,
    },

    {
      name: "i phone12 pro",
      category: "Mobile",
      price: 48999,
      stockQuantity: 70,
    },
  ];
  const [products] = useState(initialProducts);

  return (
    <div className="container">
      <h1>Product Details</h1>

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

export default Mobiles;
