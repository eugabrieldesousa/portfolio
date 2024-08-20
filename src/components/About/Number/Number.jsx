import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Number = ({ number, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // O contador será ativado apenas uma vez
    threshold: 0.5, // O elemento deve estar pelo menos 50% visível para iniciar a animação
  });

  return (
    <div className="gap flex flex-col items-center" ref={ref}>
      <span className="font-mono text-8xl font-bold">
        {inView ? (
          <CountUp start={0} end={number} duration={2.5} separator="," />
        ) : (
          number
        )}
      </span>
      <p className="font-mono">{text}</p>
    </div>
  );
};

export default Number;
