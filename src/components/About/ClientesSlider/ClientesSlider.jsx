import React from "react";
import ClienteLogo from "../ClienteLogo/ClienteLogo";

const ClienteLogos = [
  "./docebeijo.svg",
  "./find.png",
  "./logoa.png",
  "./logo.svg",
  "./logo.png",
  "./logob.svg",
  "./logo-magcom.png",
];

const ClientesSlider = () => {
  // Determina o número total de logos a serem exibidos
  const totalLogos = ClienteLogos.length;
  const logoWidth = 176; // Largura de cada logo + padding (44px + padding)
  const totalWidth = logoWidth * totalLogos;

  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div
        className="flex animate-infinite-scroll flex-row gap-10 py-10"
        style={{
          width: `${totalWidth}px`, // Ajusta a largura total dos logos
          animationDuration: "20s", // Ajusta a duração da animação conforme necessário
        }}
      >
        {[...ClienteLogos, ...ClienteLogos].map((url, index) => (
          <ClienteLogo key={index} url={url} />
        ))}
      </div>
    </div>
  );
};

export default ClientesSlider;
