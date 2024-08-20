import React, { useEffect } from "react"; // Certifique-se de importar useEffect
import About from "./templates/About";
import Header from "./templates/Header";
import Hero from "./templates/Hero";
import Projetos from "./templates/Projetos";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inicializa o AOS com uma duração padrão
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projetos />
    </>
  );
};

export default App;
