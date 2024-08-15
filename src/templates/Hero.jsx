import React from "react";
import Memoji from "../components/Header/Memoji/Memoji";
import Button from "../components/Hero/Button/Button";
import ButtonOutline from "../components/Hero/ButtonOutline/ButtonOutline";

const Hero = () => {
  return (
    <div className="flex h-[calc(100vh-124px)] flex-col items-center justify-center gap-4">
      <Memoji />
      <h1 className="text-center text-5xl font-[900] tracking-tight">
        Apaixonado <br />
        em solucionar problemas
      </h1>
      <p className="flex w-[40rem] text-center font-[400]">
        sou um desenvolvedor full-stack apaixonado por tecnologia e dedicado a
        transformar ideias em realidade. Minha paixão por fazer acontecer me
        impulsiona a enfrentar desafios complexos e a buscar a excelência em
        cada projeto que tem meu suor!
      </p>
      <div className="flex gap-6">
        <Button>Contato</Button>
        <ButtonOutline>CV</ButtonOutline>
      </div>
    </div>
  );
};

export default Hero;
