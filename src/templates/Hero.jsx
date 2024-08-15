import React from "react";
import Memoji from "../components/Header/Memoji/Memoji";
import Button from "../components/Hero/Button/Button";
import ButtonOutline from "../components/Hero/ButtonOutline/ButtonOutline";
import Technology from "../components/Hero/Technology/Technology";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7">
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
      <div className="flex flex-col items-center gap-6 pt-10">
        <span className="font-mono uppercase">Familiaridade com</span>
        <div className="flex gap-4">
          <Technology url="./typescript-16-svgrepo-com.svg" />
          <Technology url="./js-svgrepo-com.svg" />
          <Technology url="./mysql-svgrepo-com.svg" />
          <Technology url="./php-svgrepo-com.svg" />
          <Technology url="./nodejs02-svgrepo-com.svg" />
          <Technology url="./styled-components-svgrepo-com.svg" />
          <Technology url="./react.svg" />
          <Technology url="./tailwind-css-svgrepo-com.svg" />
          <Technology url="./sass-svgrepo-com.svg" />
          <Technology url="./jquery-svgrepo-com.svg" />
          <Technology url="./wordpress-svgrepo-com.svg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
