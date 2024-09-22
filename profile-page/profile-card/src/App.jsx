import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Buttons from "./components/Buttons";
import Message from "./components/Message";
import { useState } from "react";

function App() {
  const [textToShow, setTextToShow] = useState({
    username: "Hailey Lima",
    userid: "@haileylima",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, sit est voluptates magni dolores dolorem.",
  });

  const [showMessage, setShowMessage] = useState(false);

  const handleTextToShow = () => {
    setShowMessage(true);
  };

  return (
    <center>
      <div className="card">
        <Header />
        {!showMessage && (
          <>
            <Content textToShow={textToShow} />
            <Buttons handleTextToShow={handleTextToShow} />
          </>
        )}
        {showMessage && <Message></Message>}
      </div>
    </center>
  );
}

export default App;
