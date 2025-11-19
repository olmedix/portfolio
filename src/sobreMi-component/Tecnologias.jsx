import "./sobreMi.css";
import { FaLaptopCode } from "react-icons/fa";

export default function Tecnologias() {
  const tecnologias = [
    "html5.svg",
    "css.svg",
    "tailwind-css.svg",
    "javascript.svg",
    "react.svg",
    "node-js.svg",
    "php_dark.svg",
    "laravel.svg",
    "mysql.svg",
    "mongodb.svg",
    "git.svg",
    "github.svg",
  ];

  const listaTecno = tecnologias.map((tecno) => (
    <li className="list__tecno">
      <img
        className="tecno__img"
        src={"./img/tecnologias/" + tecno}
        alt={tecno}
      />
    </li>
  ));

  return (
    <section className="about__technology">
      <div className="about__container-technology">
        <div className="container-technology__title">
          <h2 className="technology__title">
            <span className="technology__icon">
              <FaLaptopCode />
            </span>
            Tecnologías
          </h2>
        </div>

        <ul className="technology__list">{listaTecno}</ul>
      </div>
    </section>
  );
}
