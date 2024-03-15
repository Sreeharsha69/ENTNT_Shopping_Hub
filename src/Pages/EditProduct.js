import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function EditProduct({ products, setProducts }) {
  const { index } = useParams();

  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");

  useEffect(() => {
    if (index >= 0 && index < products.length) {
      const product = products[index];
      setProductName(product.name);
      setCategory(product.category);
      setPrice(product.price);
      setStockQuantity(product.stockQuantity);
    }
  }, [index, products]);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleStockQuantityChange = (event) => {
    setStockQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProducts = [...products];
    updatedProducts[index] = {
      name: productName,
      category: category,
      price: parseFloat(price),
      stockQuantity: parseInt(stockQuantity),
    };
    setProducts(updatedProducts);
    window.location.href = "/product";
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={handleCategoryChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={handlePriceChange}
            required
          />
        </div>
        <div>
          <label>Stock Quantity:</label>
          <input
            type="number"
            value={stockQuantity}
            onChange={handleStockQuantityChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
