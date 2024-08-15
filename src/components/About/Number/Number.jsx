import React from "react";

const Number = ({ number, text }) => {
  return (
    <div className="gap flex flex-col items-center">
      <span className="font-mono text-8xl font-bold">{number}</span>
      <p className="font-mono">{text}</p>
    </div>
  );
};

export default Number;
