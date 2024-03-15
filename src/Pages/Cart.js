import React, { useState } from "react";
import "../Styles/Product.css";

export default function Cart() {
  const initialProducts = [
    {
      name: "Laptop",
      category: "Electronic and Gadgets",
      price: 69999,
      stockQuantity: 35,
    },
    { name: "Car", category: "Toys", price: 599, stockQuantity: 42 },
    {
      name: "Fridge",
      category: "Home and Kitchen Appliances",
      price: 21999,
      stockQuantity: 55,
    },
    { name: "Cloths", category: "Fashion", price: 5140, orders: 2 },
    { name: "Rice bag", category: "Grocery", price: 1599, orders: 6 },
  ];

  const [products, setProducts] = useState(initialProducts);

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>WELCOME to Cart</h1>
      </div>
      <br></br>
      <br></br>
      <div className="content">
        <div className="product-details">
          <h1>CART</h1>
          <br></br>
          <table className="product-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>orders</th>
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
                  <td className="actions">
                    <button onClick={() => deleteProduct(index)}>Delete</button>
                    <button>Buy</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
