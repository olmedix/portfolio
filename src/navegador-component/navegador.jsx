import React, { useState } from "react";
import "./navegador.css";
import { Link } from "react-router-dom";
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

      {/* Menú hamburguesa */}
      {menuOpen && (
        <nav className="hamburger-menu">
          <ul className="nav__list">
            <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link to="/sobre mi" onClick={toggleMenu}>Sobre mí</Link></li>
            <li><Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link></li>
            <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
            <li><Link to="/noticias" onClick={toggleMenu}>Noticias</Link></li>
          </ul>
        </nav>
      )}
      </div>


      {/* Menú de navegación principal */}
      <nav className="header__nav">
        <ul className="nav__list">
          <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li><Link to="/sobre-mi" onClick={toggleMenu}>Sobre mí</Link></li>
          <li><Link to="/proyectos" onClick={toggleMenu}>Proyectos</Link></li>
          <li><Link to="/contacto" onClick={toggleMenu}>Contacto</Link></li>
          <li><Link to="/noticias" onClick={toggleMenu}>Noticias</Link></li>
        </ul>
      </nav>
    </header>
  );
}
