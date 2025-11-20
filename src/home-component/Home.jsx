import "./home.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container">
      <section className="hero-grid">
        {/* Columna izquierda: texto */}
        <div className="hero-left">
          <p className="welcome">Hola, mi nombre es</p>

          <h1 className="hero-name">Juanjo Olmedo</h1>

          <h2 className="hero-role">
            Soy <span>Desarrollador Web</span>
          </h2>

          <p className="hero-copy">
            Optimizo el rendimiento, creo APIs limpias en Laravel, y entrego UI
            accesible y responsive.
          </p>

          <div className="cta">
            <a
              className="btn btn--secondary"
              href="/juanjoOlmedoCV.pdf"
              download="Juanjo_Olmedo_CV.pdf"
            >
              Descargar CV
            </a>
          </div>

          <div className="social">
            <a
              href="https://github.com/olmedix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-jose-olmedo-alba-691459155/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:olmedix@gmail.com">
              <FaEnvelope size={18} />
            </a>
          </div>
        </div>

        {/* Columna derecha: foto con halo */}
        <div className="hero-right">
          <figure className="photo">
            <img src="img/juanjo.png" alt="Juanjo Olmedo" />
          </figure>
        </div>
      </section>
    </div>
  );
}
