import React from "react";

const Button = (props) => {
  return (
    <button className="w-32 rounded-full bg-black px-6 py-4 text-white transition duration-500 hover:border-2 hover:border-black hover:bg-white hover:text-black">
      {props.children}
    </button>
  );
};

export default Button;
