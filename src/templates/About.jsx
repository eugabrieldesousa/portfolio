import React from "react";
import Number from "../components/About/Number/Number";
import ClientesSlider from "../components/About/ClientesSlider/ClientesSlider";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center pt-16">
      <div className="flex items-center justify-center">
        <img
          className="w-64 transition duration-500 hover:scale-[1.1]"
          data-aos="zoom-in"
          src="./eumemojiabout.png"
          alt="Sobre mim"
        />
        <div className="flex w-1/4 flex-col gap-6 text-right">
          <h2 className="text-2xl font-bold tracking-wide" data-aos="fade-up">
            sobre mim.
          </h2>
          <p data-aos="fade-up">
            E ai! Me chamo <b>Gabriel de Sousa</b>, tenho 20 anos e sou
            desenvolvedor <b>full-stack</b> residindo em Joinville, SC.
            <br />
            Atualmente, estagio na Hangar Digital, onde trabalho com React,
            Node.js, Next.js, Tailwind e outras tecnologias modernas. Também
            tenho experiência em otimização de SEO e testes de funcionalidades.
            <br /> <br />
            Com passagens como Desenvolvedor Full-Stack Jr e Analista de Suporte
            de TI, sou pontual, dedicado e comunicativo, sempre em busca de
            novos desafios e aprendizado. Se você precisa de um profissional
            comprometido com habilidades atualizadas e práticas inovadoras,{" "}
            <br />
            <br />
            <b className="font-mono tracking-widest">estou à disposição!</b>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-14 pt-12">
        <Number number={1} text={"anos de experiência"} />
        <hr />
        <Number number={11} text={"clientes no geral"} />
        <Number number={8} text={"projetos que trabalhei"} />
      </div>
      <div className="flex w-1/2 flex-col items-center justify-center pt-28">
        <h2
          className="font-mono text-2xl font-bold uppercase tracking-widest"
          data-aos="zoom-in"
        >
          Clientes
        </h2>
        <ClientesSlider />
      </div>
    </section>
  );
};

export default About;
