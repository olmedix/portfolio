import "./sobreMi.css";
import Header from "../Header";
import Tecnologias from "./Tecnologias";
import { data } from "../data";
import { MdWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import { FaAmericanSignLanguageInterpreting } from "react-icons/fa";

export default function SobreMi() {
  return (
    <>
      <Header />
      <Tecnologias />

      <section className="about__work">
        <div className="about__container-work">
          <div className="container-work__title">
            <h2 className="work__title">
              <span className="work__icon">
                <MdWork />
              </span>
              Experiencia laboral
            </h2>
          </div>
          <Trabajos />
        </div>
      </section>

      <TitulosAcademicos />

      <Idiomas />
    </>
  );
}

function Trabajos() {
  let trabajos = data.map((trabajo) => (
    <li className="list__work" key={trabajo.id}>
      <h3 className="work__subtitle">{trabajo.title}</h3>
      <span className="work__time">
        {trabajo.yearStart + " - " + trabajo.yearEnd}
        {trabajo.season ? (
          <span className="subtitle__season"> "temporada"</span>
        ) : (
          ""
        )}
      </span>
      <p className="work__description">{trabajo.description}</p>
    </li>
  ));

  return <ul className="work__list">{trabajos}</ul>;
}

function TitulosAcademicos() {
  return (
    <section className="about__studies">
      <div className="about__container-studies">
        <div className="container-studies__title">
          <h2 className="studies__title">
            <span className="studies__icon">
              <IoSchoolSharp />
            </span>
            Títulos académicos
          </h2>
        </div>

        <ul className="studies__list">
          <li className="list__item">
            Grado superior " Diseño aplicaciones Web "
          </li>
          <li className="list__item">
            Grado medio " Actividades físico deportivas en el medio natural "
          </li>
          <li className="list__item">
            Graduado en Educación Secundaria Obligatoria
          </li>
        </ul>
      </div>
    </section>
  );
}

function Idiomas() {
  return (
    <section className="about__language">
      <div className="about__container-language">
        <div className="container-language__title">
          <h2 className="language__title">
            <span className="language__icon">
              <FaAmericanSignLanguageInterpreting />
            </span>
            Idiomas
          </h2>
        </div>

        <ul className="language__list">
          <li className="list__item">Español: Nativo</li>
          <li className="list__item">Catalán: Nativo </li>
          <li className="list__item">Inglés: Alto</li>
        </ul>
      </div>
    </section>
  );
}
