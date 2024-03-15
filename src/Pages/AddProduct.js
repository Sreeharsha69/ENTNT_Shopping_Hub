import React from "react";

export default function AddProduct() {
  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/product";
  }

  return (
    <div>
      <h1>Add Products</h1>
      <form id="productForm" onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <input type="text" name="productName" required />
        <br />
        <br />
        <label>Product Category:</label>
        <input type="text" name="productCategory" required />
        <br />
        <br />
        <label>Product Price:</label>
        <input type="text" name="productPrice" required />
        <br />
        <br />
        <label>Product Stock:</label>
        <input type="text" name="productStock" required />
        <br />
        <br />
        <br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
