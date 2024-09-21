import React from "react";
import "./Buttons.css";

const Buttons = ({ handleTextToShow }) => {
  return (
    <>
      <div className="btn">
        <button>Follow</button>
        <button onClick={handleTextToShow}>Message</button>
      </div>
    </>
  );
};

export default Buttons;
