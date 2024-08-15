import React from "react";

const ButtonOutline = (props) => {
  return (
    <button className="w-32 rounded-full border-2 border-black px-6 py-4 text-black transition duration-500 hover:bg-black hover:text-white">
      {props.children}
    </button>
  );
};

export default ButtonOutline;
