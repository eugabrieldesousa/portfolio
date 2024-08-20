import React from "react";

const ClienteLogo = ({ url }) => {
  return (
    <img
      className="aspect-square w-36 object-contain p-2 brightness-0 grayscale filter transition-transform duration-300 hover:scale-110"
      src={url}
      alt=""
    />
  );
};

export default ClienteLogo;
