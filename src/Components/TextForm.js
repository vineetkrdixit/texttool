import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your Text Here");
  const ConverToUpper = () => {
    // console.log("you have clicked me " + text);
    const newLine = text.toUpperCase();
    setText(newLine);
  };
  const onChange = (event) => {
    // console.log("you have clicked Chnaged ");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="MyForm" className="form-label my-3">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="MyForm"
            rows="8"
            value={text}
            onChange={onChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={ConverToUpper}
        >
          Change To UpperCase
        </button>
      </div>

      <div className="container my-3">
        <p>you have {text.split(" ").length} words in it</p>
        <p>you have {text.length} characters in it</p>
        <p>Your Summary</p>
      </div>
    </>
  );
}
