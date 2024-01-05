import React, { useEffect, useState } from "react";
// import { Container} from 'styled-bootstrap-grid';
// import {  Route,Routes, useNavigate } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Product from "./pages/Products";
import Calculator from "./Calculator";
import Form from "./Form";
import { getAllProducts } from "./api/api";

const App = () => {

// useEffect(async()=>{
//   const getProducts =await getAllProducts()
//   console.log("getProducts",getProducts)
// },[])
  // const navigate =useNavigate()
  // navigate("/home")
  return (
    <>
    <Form/>
    <Calculator/>
      {/* <Form/> */}
      {/* <Routes> 
   <Route path="/home" element={<Home/>}></Route>
   <Route path="/" element={<About/>}></Route>
   <Route path="/product" element={<Product/>}></Route>
</Routes>   */}
    </>
  );
};


export default App;
