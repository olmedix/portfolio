import "./home-components/home.css";

export default function Header() {
  return (
    <header className="header__container">
      <h1 className="header__title">Portfolio</h1>
      <nav className="header__nav">
        <a href="#">Inicio</a>
        <a href="#">Sobre mí</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
        <a href="#">Noticias</a>
      </nav>
    </header>
  );
}
