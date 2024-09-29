import React from "react";
import "./Product_Info.css";

const Product_Info = () => {
  return (
    <div className="info">
      <span>
        <p>Rent Per Month</p>
        <p>Rs. 720</p>
      </span>
      <span>
        <p>Refundable Deposit</p>
        <p>Rs. 1,379</p>
      </span>
      <span>
        <p>Tenure [in months]</p>
        <p>3</p>
        <p>6</p>
        <p>9</p>
        <p>12</p>
      </span>
      <span>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi in
          officiis, voluptatum pariatur unde minus dolorum quam sapiente beatae
          sed, delectus atque consequatur, suscipit odit porro explicabo velit
          sunt asperiores.
        </p>
      </span>
      <span>
        {" "}
        <p style={{ color: "palevioletred" }}>More</p>
      </span>
    </div>
  );
};

export default Product_Info;
