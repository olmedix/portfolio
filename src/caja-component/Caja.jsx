import "./caja.css";
import { useState } from "react";

export default function CajaContenedor({ children }) {
  return <div className="newsletter__container">{children}</div>;
}

export function Caja({ category,img, title, text, link, linkText }) {
 
  const [readMore, setReadMore] = useState(false);

  function toggleReadMore(){
    setReadMore(!readMore);
  }
 
 
  return (
    <article className="box__container">
      
      <img className="box__image" src={img} alt={title} />

      <h3 className="box__image-title">{category}</h3>

      <h4 className="box__content-title">{title}</h4>
      <div className="box__content-container">
        <p className="box__content">
        {readMore?text: text.substring(0,100)+"..."}
        <button className={readMore?"on":"off"} onClick={toggleReadMore} >
          {readMore?"Ver menos":"Leer más"}
        </button>
        </p>
        
      </div>

      <div className="box__button">
      <a href={link} Target="_blank" className="button__link">
        {linkText}
      </a>
      </div>
      
    </article>
  );
}
