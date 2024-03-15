import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Order from "./Pages/Orders";
import AddProduct from "./Pages/AddProduct";
import EditProduct from "./Pages/EditProduct";
import DeleteProduct from "./Pages/DeleteProduct";
import Cart from "./Pages/Cart";
import Mobiles from "./Pages/product/Mobiles";
import TV from "./Pages/product/Tv";
import Ac from "./Pages/product/Ac";
import Fridge from "./Pages/product/Fridge";
import Fans from "./Pages/product/Fans";
import Watches from "./Pages/product/Watches";
import Laptop from "./Pages/product/Laptop";
import Earphones from "./Pages/product/Earphones";
import Bags from "./Pages/product/Bags";
import Books from "./Pages/product/Books";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/logout" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/add" element={<AddProduct />}></Route>
        <Route path="/edit" element={<EditProduct />}></Route>
        <Route path="/delete" element={<DeleteProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/mobiles" element={<Mobiles />}></Route>
        <Route path="/bags" element={<Bags />}></Route>
        <Route path="/tv" element={<TV />}></Route>
        <Route path="/ac" element={<Ac />}></Route>
        <Route path="/laptop" element={<Laptop />}></Route>
        <Route path="/watches" element={<Watches />}></Route>
        <Route path="/fans" element={<Fans />}></Route>
        <Route path="/fridge" element={<Fridge />}></Route>
        <Route path="/earphones" element={<Earphones />}></Route>
        <Route path="/books" element={<Books />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
