import React from "react";
import { CiStar } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";

import "./Product_Name.css";

const Product_Name = () => {
  return (
    <div className="heading">
      <div className="product-name">
        <h1>Alpha Beta Cycles</h1>
        <CiHeart size={23} style={{ color: "gray" }} />
        <CiShare2 size={23} style={{ color: "gray" }} />
      </div>
      <div className="stars">
        <CiStar className="star" size={20} style={{ color: "gray" }} />
        <CiStar className="star" size={20} style={{ color: "gray" }} />
        <CiStar className="star" size={20} style={{ color: "gray" }} />
        <CiStar className="star" size={20} style={{ color: "gray" }} />
        <CiStar className="star" size={20} style={{ color: "gray" }} />
      </div>
    </div>
  );
};

export default Product_Name;
