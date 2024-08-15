import React from "react";

const ClienteLogo = ({ url }) => {
  return (
    <img
      className="aspect-square w-48 object-contain p-2 brightness-0 grayscale filter"
      src={url}
      alt=""
    />
  );
};

export default ClienteLogo;
