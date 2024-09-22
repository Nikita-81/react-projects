import React from "react";
import image from "../assets/image.jpg";
import "./SmallHeader.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";

const SmallHeader = ({ handleBackButton, textToShow }) => {
  return (
    <div className="msg-header">
      <div className="main-icons">
        <IoIosArrowRoundBack
          className="backarrow"
          size={30}
          onClick={handleBackButton}
        />
        <img src={image} alt="" />
        <div className="user-info">
          <p className="name">{textToShow.username}</p>
          <p className="id">{textToShow.userid}</p>
        </div>
      </div>
      <div className="call">
        <IoIosCall size={20} className="phone" />
        <MdVideoCall size={23} className="video" />
      </div>
    </div>
  );
};

export default SmallHeader;
