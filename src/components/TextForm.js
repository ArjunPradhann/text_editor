import React from "react";

export default function TextForm() {
  return (
    <div>
      <div className="mb-3 ml-10">
        <label className="flex flex-col">Example Textarea</label>
        <textarea
          placeholder="Enter Text here"
          className="h-20 border-solid"
        ></textarea>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex flex-row">
          To change in UpperCase
        </button>
      </div>
    </div>
  );
}
