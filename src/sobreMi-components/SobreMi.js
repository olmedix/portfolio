import "../css/sobreMi.css";
import Header from "../Header";
import { data } from "../data";
import { MdWork } from "react-icons/md";

export default function SobreMi() {
  return (
    <>
      <Header />
      <section className="about__work">
        <div className="about__container">
          <div>
            <MdWork />
            <h2 className="about__title">Experiencia laboral</h2>
          </div>
          <Trabajos />
        </div>
      </section>
    </>
  );
}

function Trabajos() {
  let trabajos = data.map((trabajo) => (
    <li className="list__work" key={trabajo.id}>
      <h3 className="work__title">
        {trabajo.title}
        {trabajo.season ? (
          <span className="title__season">"temporada"</span>
        ) : (
          ""
        )}
      </h3>
      <span className="work__time">
        {trabajo.yearStart + " - " + trabajo.yearEnd}
      </span>
      <p className="work__description">{trabajo.description}</p>
    </li>
  ));

  return <ul className="about__list">{trabajos}</ul>;
}
