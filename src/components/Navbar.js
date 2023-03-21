import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className=" flex flex-row gap-4 bg-slate-500 pt-2 pb-2 pl-2">
        <p>{props.aboutTopic}</p>
        <p>{props.first}</p>
        <p>{props.second}</p>
        <p>{props.third}</p>
      </nav>
    </div>
  );
}
