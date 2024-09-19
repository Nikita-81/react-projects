import React from "react";
import image from "../assets/image.jpg";
import "./Header.css";

const Header = () => {
  return (
    <>
      <center className="header">
        <img src={image} alt="profile picture" className="profile-img" />
      </center>
    </>
  );
};

export default Header;
