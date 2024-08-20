import React from "react";

const CaseFoto = ({ url, className, size, self }) => {
  // Cria um estilo inline para o alignSelf
  const alignSelfStyle = self ? { alignSelf: self } : {};

  return (
    <div
      className={`transition-transform duration-500 hover:scale-105 ${className} flex overflow-hidden rounded-3xl shadow-md shadow-gray-500`}
      style={{ height: size, ...alignSelfStyle }} // Aplica o alignSelf como estilo inline
    >
      <img src={url} alt="Case" className="h-full w-full object-cover" />
    </div>
  );
};

export default CaseFoto;
