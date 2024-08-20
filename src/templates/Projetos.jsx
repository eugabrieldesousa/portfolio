import React from "react";
import CaseFoto from "../components/Projetos/CaseFoto";

const Projetos = () => {
  const cases = [
    { url: "./images.jpeg", size: "18rem", self: "flex-start" }, // Ajuste os valores conforme necessário
    { url: "./images.jpeg", size: "12rem", self: "flex-end" },
    {
      url: "./images.jpeg",
      size: "24rem",
      self: "flex-end",
      className: "col-span-2",
    },
    { url: "./images.jpeg", size: "12rem", self: "flex-start" },
    { url: "./images.jpeg", size: "18rem", self: "flex-start" },
  ];

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 p-4">
      {cases.map((caseData, index) => (
        <CaseFoto
          key={index}
          url={caseData.url}
          className={caseData.className}
          size={caseData.size} // Passe a prop size
          self={caseData.self} // Passe a prop self
        />
      ))}
    </div>
  );
};

export default Projetos;
