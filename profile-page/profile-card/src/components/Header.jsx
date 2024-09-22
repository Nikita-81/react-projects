import React from "react";
import image from "../assets/image.jpg";
import "./Header.css";
import { IoIosArrowRoundBack } from "react-icons/io";

const Header = () => {
  return (
    <>
      <center className="header">
        <span className="back">
          <IoIosArrowRoundBack className="backarrow" size={30} />
        </span>
        <div className="pfp">
          <img src={image} alt="profile picture" className="profile-img" />
        </div>
      </center>
    </>
  );
};

export default Header;
