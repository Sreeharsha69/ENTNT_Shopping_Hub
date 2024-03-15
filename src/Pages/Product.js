import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Product.css";

export default function Product() {
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
    { name: "Cloths", category: "Fashion", price: 5140, stockQuantity: 200 },
    { name: "Rice bag", category: "Grocery", price: 1599, stockQuantity: 65 },
    { name: "TV", category: "Appliances", price: 49999, stockQuantity: 80 },
    {
      name: "Guitars",
      category: "Music Instruments",
      price: 26000,
      stockQuantity: 46,
    },
    { name: "Notebooks", category: "Study", price: 159, stockQuantity: 70 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: 0,
    stockQuantity: 0,
  });

  const addProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      name: "",
      category: "",
      price: 0,
      stockQuantity: 0,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const deleteProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>WELCOME to PRODUCTS</h1>
      </div>
      <br></br>
      <br></br>
      <div className="content">
        <div className="add-product">
          <h2>Add New Product</h2>
          <br></br>
          <form>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </div>
            <br></br>
            <div>
              <label>Category:</label>
              <input
                type="text"
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
              />
            </div>
            <br></br>
            <div>
              <label>Price:</label>
              <input
                type="number"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </div>
            <br></br>
            <div>
              <label>Stock Quantity:</label>
              <input
                type="number"
                name="stockQuantity"
                value={newProduct.stockQuantity}
                onChange={handleInputChange}
              />
            </div>
            <br></br>
            <button type="button" onClick={addProduct}>
              Add Product
            </button>
          </form>
        </div>
        <div className="product-details">
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
                  <td className="actions">
                    <button onClick={() => deleteProduct(index)}>Delete</button>
                    <Link to="/edit">Edit</Link>
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
