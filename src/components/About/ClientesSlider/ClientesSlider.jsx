import React from "react";
import ClienteLogo from "../ClienteLogo/ClienteLogo";

const ClientesSlider = () => {
  return (
    <div className="flex gap-6 py-20">
      <ClienteLogo url={"./docebeijo.svg"} />
      <ClienteLogo url={"./find.png"} />
      <ClienteLogo url={"./logoa.png"} />
      <ClienteLogo url={"./logo.svg"} />
      <ClienteLogo url={"./logo.png"} />
      <ClienteLogo url={"./logob.svg"} />
    </div>
  );
};

export default ClientesSlider;
