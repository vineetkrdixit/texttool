import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="TextTool" about="aabout" /> */}
      <Navbar title="TextTool" />
      <div className="container">
        {" "}
        {/*this will make container in middle of the div*/}
        <TextForm heading="Enter the Text Below" />
      </div>
    </>
  );
}

export default App;
