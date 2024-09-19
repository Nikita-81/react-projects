import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Buttons from "./components/Buttons";

function App() {
  return (
    <center>
      <div className="card">
        <Header />
        <Content />
        <Buttons />
      </div>
    </center>
  );
}

export default App;
