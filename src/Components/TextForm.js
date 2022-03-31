import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const ConverToUpper = () => {
    // console.log("you have clicked me " + text);
    let newLine = text.toUpperCase();
    setText(newLine);
  };
  const ConverToLower = () => {
    // console.log("you have clicked me " + text);
    let newLine = text.toLowerCase();
    setText(newLine);
  };
  const Clear = () => {
    // console.log("you have clicked me " + text);
    let newLine = "";
    setText(newLine);
  };
  const MeaningfFullWord = () => {
    let newtext = text.split(" ");
    let meaning = newtext
      .map((value, index, array) => {
        return value[0].toUpperCase() + value.substring(1);
      })
      .join(" ");
    setText(meaning);
    //console.log(meaning);
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
          className="btn btn-primary mx-2"
          onClick={ConverToUpper}
        >
          Change To UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={ConverToLower}
        >
          Change To LowerCase
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={MeaningfFullWord}
        >
          MeaningFull Word
        </button>

        <button type="button" className="btn btn-primary" onClick={Clear}>
          Clear
        </button>
      </div>

      <div className="container my-3">
        <p>You have {text.split(" ").length} words in it</p>
        <p>You have {text.length} characters in it</p>
        <h2>{text}</h2>
      </div>
    </>
  );
}
