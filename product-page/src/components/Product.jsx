import React from "react";
import product from "../assets/bicycle.jpg";
import "./Product.css";
import Product_Name from "./Product_Name";
import Product_Info from "./Product_Info";
import Buttons from "./Buttons";

const Product = () => {
  return (
    <div className="section">
      <div className="left-section">
        <img src={product} alt="" />
      </div>
      <div className="right-section">
        <Product_Name />
        <Product_Info />
        <Buttons />
      </div>
    </div>
  );
};

export default Product;
