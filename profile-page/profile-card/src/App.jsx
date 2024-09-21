import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Buttons from "./components/Buttons";
import Message from "./components/Message";
import { useState } from "react";

function App() {
  let [textToShow, setTextToShow] = useState([]);
  textToShow = {
    username: "Hailey Lima",
    userid: "@haileylima",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sit est voluptates magni dolores dolorem.",
  };

  const handleTextToShow = () => {
    [...textToShow.userid];
  };
  setTextToShow(handleTextToShow);

  return (
    <center>
      <div className="card">
        <Header />
        <Content textToShow={textToShow} />
        <Buttons />
        <Message></Message>
      </div>
    </center>
  );
}

export default App;
