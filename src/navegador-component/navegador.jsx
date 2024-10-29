import "./navegador.css";
import { Link } from "react-router-dom";


export default function Navegador(){
return(
    <nav className="header__nav">
        <Link to="/">Inicio</Link>
        <Link to="/sobre mi">Sobre mí</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/noticias">Noticias</Link>
    </nav>
);
}