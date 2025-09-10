// src/App.jsx
import { useEffect, useState } from "react";
import Navegador from "./navegador-component/navegador";
import Home from "./home-component/Home";
import SobreMi from "./sobreMi-component/SobreMi";
import Proyectos from "./proyectos-component/Proyecto";
import "./App.css";

export default function App() {
  const sections = ["inicio", "sobre-mi", "proyectos"];
  const [active, setActive] = useState(sections[0]);

  // App.jsx (solo el effect del observer)
  useEffect(() => {
    const ids = ["inicio", "sobre-mi", "proyectos"]; // los tuyos
    const observer = new IntersectionObserver(
      (entries) => {
        // Filtra las que están visibles
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        // Elige la más visible por intersectionRatio
        const mostVisible = visible.reduce(
          (max, e) => (e.intersectionRatio > max.intersectionRatio ? e : max),
          visible[0]
        );

        setActive(mostVisible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.35, 0.55, 0.75],
        // Empuja un poco el "punto dulce" hacia arriba para no pisar con el header
        rootMargin: "0px 0px -35% 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navegador active={active} sections={sections} />
      <main>
        <section id="inicio" className="section">
          <Home />
        </section>
        <section id="sobre-mi" className="section">
          <SobreMi />
        </section>
        <section id="proyectos" className="section">
          <Proyectos />
        </section>
        {/*
        <section id="contacto" className="section">
           Puedes renderizar <Contacto/> si quieres recuperar ese componente 
        </section>
        */}
      </main>
    </>
  );
}
