import "./home.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="body__container">
      <div className="body__description">
        <p className="description__welcome">Hola, mi nombre es </p>
        <p className="description__name">Juanjo Olmedo</p>
        <h2 className="description__profession">
          Y soy <span>Desarrollador Web</span>
        </h2>

        <p className="description__content">
          Tengo experiencia en la creación de aplicaciones dinámicas y
          responsivas, utilizando tecnologías modernas como React y Laravel. Mi
          objetivo es aportar soluciones a través de un código limpio y
          eficiente.
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/olmedix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/olmedix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://www.instagram.com/olmedix"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} />
          </a>
          <a href="mailto:olmedix@gmail.com">
            <FaEnvelope size={40} />
          </a>
        </div>

        <div className="download-cv">
          <a
            className="btn-download-cv"
            href="/juanjoOlmedoCV.pdf"
            download="Juanjo_Olmedo_CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="body__image">
        <div className="image__container">
          <img
            src="img/juanjo.png"
            alt="Imagen de Juanjo Olmedo"
            title="Juanjo"
          ></img>
        </div>
      </div>
    </main>
  );
}
