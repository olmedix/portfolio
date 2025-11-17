import "./caja.css";
import { useState } from "react";
import { Carousel } from "../carousel/Carousel"; 

export default function CajaContenedor({ children }) {
  return (
    <div>
      <h3 className="box__title">Proyectos</h3>

      <div className="newsletter__container">{children}</div>
    </div>
  );
}

export function Caja({ category, img, title, text, link, linkText, web }) {
  const [readMore, setReadMore] = useState(false);

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  return (
    <article className="box__container">
      {img.length === 1 ? (
        <img className="box__image" src={img[0]} alt={title} />
      ) : (
        <Carousel images={img} />
      )}

      <h3 className="box__image-title">{category}</h3>

      <h4 className="box__content-title">{title}</h4>
      <div className="box__content-container">
        <p className="box__content">
          {readMore || text.length < 100
            ? text
            : text.substring(0, 100) + "..."}

          {text.length > 100 && (
            <button
              className={readMore ? "on" : "off"}
              onClick={toggleReadMore}
            >
              {readMore ? "Ver menos" : "Leer más"}
            </button>
          )}
        </p>
      </div>

      <div className="box__web">
        {web && (
          <a
            href={web}
            target="_blank"
            className="button__web"
            rel="noreferrer"
          >
            Visitar
          </a>
        )}
      </div>

      <div className="box__button">
        <a
          href={link}
          target="_blank"
          className="button__link"
          rel="noreferrer"
        >
          {linkText}
        </a>
      </div>
    </article>
  );
}
