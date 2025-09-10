// src/navegador-component/navegador.jsx
import React, { useState } from "react";
import "./navegador.css";
import { TiThMenu } from "react-icons/ti";

export default function Navegador({ active, sections }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((v) => !v);

  const links = (
    <ul className="nav__list">
      {sections.map((id) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={() => {
              if (menuOpen) setMenuOpen(false);
            }} // <- solo cierra si estaba abierto
            className={`nav__link ${active === id ? "is-active" : ""}`}
          >
            {id.replace("-", " ")}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="header__container glass">
      <div className="menuBoton">
        <button
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <TiThMenu />
        </button>
        {menuOpen && <nav className="hamburger-menu">{links}</nav>}
      </div>
      <nav className="header__nav">{links}</nav>
    </header>
  );
}
