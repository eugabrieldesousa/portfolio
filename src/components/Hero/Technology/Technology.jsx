import React from "react";

const Technology = ({ url }) => {
  return (
    <img
      className="w-10 transition-transform duration-300 ease-in-out hover:-translate-y-2"
      src={url}
      alt="Icon de uma tecnologia"
    />
  );
};

export default Technology;
