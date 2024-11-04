import "./caja.css";

export default function CajaContenedor({ children }) {
  return <div className="newsletter__container">{children}</div>;
}

export function Caja({ img, imgTitle, title, text, link, linkText }) {
  return (
    <article className="box__container">
      
      <img className="box__image" src={`./img/${img}`} alt={img} />

      <h3 className="box__image-title">{imgTitle}</h3>

      <h4 className="box__content-title">{title}</h4>
      <div className="box__content-container">
        <p className="box__content">{text}</p>
      </div>

      <div className="box__button">
      <a href={link} Target="_blank" className="button__link">
        {linkText}
      </a>
      </div>
      
    </article>
  );
}
