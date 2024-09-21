import React from "react";
import "./Content.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Content = ({ textToShow }) => {
  return (
    <>
      <div className="user-name">
        <h2>{textToShow.username}</h2>
        <p className="user-id">{textToShow.userid}</p>
      </div>
      <div className="icons">
        <FaFacebook />
        <FaLinkedin />
        <FaXTwitter />
        <AiFillInstagram />
      </div>
      <p className="about">{textToShow.content}</p>
    </>
  );
};

export default Content;
