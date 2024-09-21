import React from "react";
import "./Message.css";

const Message = () => {
  return (
    <form>
      <input className="textarea" readOnly></input>
      <input type="text" className="textsend" />
      <button>Send</button>
    </form>
  );
};

export default Message;
