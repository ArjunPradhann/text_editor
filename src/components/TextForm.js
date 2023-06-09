import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  //   const [word, setWord] = useState(0);

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChanger = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <div className="mb-3 ml-10">
        <label className="flex flex-col">{props.heading}</label>
        <textarea
          value={text}
          className="h-20 border-solid"
          onChange={handleOnChanger}
        ></textarea>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleUpClick}
          >
            Conver to UpperCase
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLoClick}
          >
            Conver to LowerCase
          </button>
        </div>
      </div>
      <div className="container mt-2 ml-10">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words {text.length} character
        </p>
        <h2 className="mt-5">
          <strong>Preview</strong>
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
