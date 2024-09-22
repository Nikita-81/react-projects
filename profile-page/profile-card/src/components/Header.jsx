import React, { useState } from "react";
import image from "../assets/image.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <center className="header">
        <span className="back"></span>
        <div className="pfp">
          <img src={image} alt="profile picture" className="profile-img" />
        </div>
      </center>
    </>
  );
};

export default Header;
