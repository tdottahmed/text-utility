import React, { useEffect, useState } from "react";

export default function TextDescription(props) {
  const [textInput, setTextInput] = useState("");
  const [wpm, setWPM] = useState(0);
  const [cpm, setCPM] = useState(0);
  const [startTime, setStartTime] = useState(null);
  useEffect(() => {
    if (textInput.trim() === "") {
      setWPM(0);
      setCPM(0);
      setStartTime(null);
      return;
    }

    const timeElapsed = (Date.now() - startTime) / 1000; // in seconds
    const words = textInput.trim().split(/\s+/);
    const currentWordCount = words.length;
    const currentCharecterCount = textInput.length;

    if (timeElapsed > 0) {
      const currentWPM = Math.round((currentWordCount / timeElapsed) * 60); // Words per minute
      setWPM(currentWPM);
    }
    if (timeElapsed > 0) {
      const currentCPM = Math.round((currentCharecterCount / timeElapsed) * 60); // Words per minute
      setCPM(currentCPM);
    }
  }, [textInput, startTime]);

  const clickUpHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Upper Case.", "success");
  };

  const clickLowerHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted to Lower Case.", "success");
  };
  const clickRemoveHandler = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Field Clered Successfully.", "success");
  };

  const changeHandler = (event) => {
    setText(event.target.value);
    let lenght = text.split(/\s+/).filter((element) => {
      return element.length !== 0;
    }).length;
    if (startTime === null) {
      setStartTime(Date.now());
    }
    setTextInput(event.target.value);

    console.log(lenght);
  };

  const clickCopyHandler = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied Successfully.", "success");
  };

  const clickExtraSpaces = (event) => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(
      "Text Fields Extra Spaces Removed Successfully.",
      "success"
    );
  };

  const clickCamelCase = () => {
    let newText = text
      .trim()
      .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
    setText(newText);
    props.showAlert("Text Converted to Camel Case.", "success");
  };

  const clickSnakCase = () => {
    let newText = text.replace(/\s+/g, "_");
    setText(newText);
    props.showAlert("Text Converted to Snake Case.", "success");
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <hr />
        <div className="form-group">
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            id="myText"
            value={text}
            onChange={changeHandler}
            rows="12"
          ></textarea>
        </div>
        <div className="mt-2">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mb-2 mx-1"
            onClick={clickUpHandler}
          >
            Convert to Uppercase
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-1"
            onClick={clickLowerHandler}
          >
            Convert to Lower Case
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success rounded mb-2 mx-1"
            onClick={clickCamelCase}
          >
            Convert to CamelCase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-success mb-2 mx-1"
            onClick={clickSnakCase}
          >
            Convert to Snake_case
          </button>

          <button
            disabled={text.length === 0}
            className="btn btn-info mb-2 mx-1"
            onClick={clickCopyHandler}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-warning mb-2 mx-1"
            onClick={clickExtraSpaces}
          >
            Remove Extra space
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-danger mb-2 mx-1"
            onClick={clickRemoveHandler}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-4"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Your Texts Summary</h1>
        <hr />
        <p>
          Total Words:
          <span className="border border-success p-2 ml-3 font-weight-bolder">
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </span>
        </p>
        <hr />
        <p>
          Typing Speed(Word per Minute):
          <span className="border border-success p-2 ml-3 font-weight-bolder">
            {wpm}
          </span>
        </p>
        <hr />
        <p>
          Typing Speed(Charecter per minute):
          <span className="border border-success p-2 ml-3 font-weight-bolder">
            {cpm}
          </span>
        </p>
        <hr />
        <p>
          Total character:{" "}
          <span className="border border-info p-2 ml-3 font-weight-bolder">
            {text.length}
          </span>
        </p>
        <hr />
        <p>
          Can be read (approxmatly*):{" "}
          <span className="border border-info p-2 ml-3 mr-1 font-weight-bolder">
            {0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length}
          </span>
          minitue
        </p>
        <hr />
        <div className="container">
          <h2>Text Preview</h2>
          <hr />
          <p className="text-justify">{text}</p>
        </div>
      </div>
    </>
  );
}
