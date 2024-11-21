import "./navegador.css";
import { Link } from "react-router-dom";


export default function Navegador(){
return(
    <header className="header__container">
      <h1 className="header__title">Portfolio</h1>
    
    <nav className="header__nav">
        <ul className="nav__list">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre mi">Sobre mí</Link></li>
            <li><Link to="/proyectos">Proyectos</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
        </ul>
    </nav>
    </header>
);
}