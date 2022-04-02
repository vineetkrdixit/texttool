import { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  let [initial, setMode] = useState("light");
  let darkMode = () => {
    if (initial === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#283041";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      {/* <Navbar title="TextTool" about="aabout" /> */}
      <Navbar title="TextTool" mode={initial} darkMode={darkMode} />
      <div className="container">
        {" "}
        {/*this will make container in middle of the div*/}
        <TextForm heading="Enter the Text Below" mode={initial} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
