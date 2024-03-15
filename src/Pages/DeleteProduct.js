import React from "react";

export default function DeleteProduct() {
  function handleSubmit(event) {
    event.preventDefault();
    window.location.href = "/product";
  }
  return <p>Delete</p>;
}
