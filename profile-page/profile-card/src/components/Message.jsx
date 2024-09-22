import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <div className="inputs">
      <input className="textarea" readOnly></input>
      <input type="text" className="textsend" />
      <button>Send</button>
    </div>
  );
};

export default Message;
