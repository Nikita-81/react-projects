import React from "react";
import { IoBag } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import user from "../assets/user.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">rentomoj</div>
      <div className="nav-items">
        <input type="text" placeholder="I want to rent" />
        <FaSearch className="icon" />
        <span>Wheels</span>
        <span>Banglore</span>
        <span className="user">
          <img src={user} />
          <span>Divan</span>
        </span>
        <IoBag className="cart" />
      </div>
    </nav>
  );
};

export default Navbar;
