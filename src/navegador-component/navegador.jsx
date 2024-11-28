import React, { useState } from "react";
import "./navegador.css";

import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";



export default function Navegador() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header__container">
      <h1 className="header__title">Portfolio</h1>

      {/* Botón de menú hamburguesa */}
      <div className="menuBoton">
      <div className="menu-button" onClick={toggleMenu}>
      <TiThMenu />
      </div>

      {/* Menú hamburguesa 
        NavLink detecta por default la clase active y no es necesario agregarsela.
      */}
      {menuOpen && (
        <nav className="hamburger-menu">
         <ul className="nav__list">
          <li><NavLink to="/" onClick={toggleMenu}>Inicio</NavLink></li>
          <li><NavLink to="/sobre-mi" onClick={toggleMenu}>Sobre mí</NavLink></li>
          <li><NavLink to="/proyectos" onClick={toggleMenu}>Proyectos</NavLink></li>
          <li><NavLink to="/contacto" onClick={toggleMenu}>Contacto</NavLink></li>
          <li><NavLink to="/noticias" onClick={toggleMenu}>Noticias</NavLink></li>
        </ul>
        </nav>
      )}
      </div>


      {/* Menú de navegación principal */}
      <nav className="header__nav">
        <ul className="nav__list">
          <li><NavLink to="/" onClick={toggleMenu}>Inicio</NavLink></li>
          <li><NavLink to="/sobre-mi" onClick={toggleMenu}>Sobre mí</NavLink></li>
          <li><NavLink to="/proyectos" onClick={toggleMenu}>Proyectos</NavLink></li>
          <li><NavLink to="/contacto" onClick={toggleMenu}>Contacto</NavLink></li>
          <li><NavLink to="/noticias" onClick={toggleMenu}>Noticias</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
