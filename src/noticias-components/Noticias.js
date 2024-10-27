import "../css/noticias.css";
import Header from "../Header";

export default function Noticias() {
  return (
    <>
      <Header />
      {
        <div className="newsletter__container">
          <Caja
            img="tecno.png"
            imgTitle="Inteligencia Artificial"
            title="VR Technology Will Increase, Expert Said"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum
          pariatur doloremque maiores sint. Praesentium autem blanditiis porro,
          adipisci error, rerum maiores nostrum impedit vitae architecto sint
          consequuntur ipsam neque?"
            link="https://www.creativefabrica.com/es/product/email-newsletter-template-tech/"
          />
          <Caja
            img="tecno.png"
            imgTitle="Inteligencia Artificial"
            title="VR Technology Will Increase, Expert Said"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum
          pariatur doloremque maiores sint. Praesentium autem blanditiis porro,
          adipisci error, rerum maiores nostrum impedit vitae architecto sint
          consequuntur ipsam neque?"
            link="https://www.creativefabrica.com/es/product/email-newsletter-template-tech/"
          />
          <Caja
            img="tecno.png"
            imgTitle="Inteligencia Artificial"
            title="VR Technology Will Increase, Expert Said"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum
          pariatur doloremque maiores sint. Praesentium autem blanditiis porro,
          adipisci error, rerum maiores nostrum impedit vitae architecto sint
          consequuntur ipsam neque?"
            link="https://www.creativefabrica.com/es/product/email-newsletter-template-tech/"
          />
          <Caja
            img="tecno.png"
            imgTitle="Inteligencia Artificial"
            title="VR Technology Will Increase, Expert Said"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum
          pariatur doloremque maiores sint. Praesentium autem blanditiis porro,
          adipisci error, rerum maiores nostrum impedit vitae architecto sint
          consequuntur ipsam neque?"
            link="https://www.creativefabrica.com/es/product/email-newsletter-template-tech/"
          />
          <Caja
            img="tecno.png"
            imgTitle="Inteligencia Artificial"
            title="VR Technology Will Increase, Expert Said"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum
          pariatur doloremque maiores sint. Praesentium autem blanditiis porro,
          adipisci error, rerum maiores nostrum impedit vitae architecto sint
          consequuntur ipsam neque?"
            link="https://www.creativefabrica.com/es/product/email-newsletter-template-tech/"
          />
          <Caja
            img="tecno.png"
            imgTitle="Inteligencia Artificial"
            title="VR Technology Will Increase, Expert Said"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum
          pariatur doloremque maiores sint. Praesentium autem blanditiis porro,
          adipisci error, rerum maiores nostrum impedit vitae architecto sint
          consequuntur ipsam neque?"
            link="https://www.creativefabrica.com/es/product/email-newsletter-template-tech/"
          />
        </div>
      }
    </>
  );
}

function Caja({ img, imgTitle, title, text, link }) {
  return (
    <article className="box__container">
      <img className="box__image" src={`./img/imgNoticias/${img}`} alt={img} />

      <h3 className="box__image-title">{imgTitle}</h3>

      <h4 className="box__content-title">{title}</h4>
      <div className="box__content-container">
        <p className="box__content">{text}</p>
      </div>
      <a href={link} Target="_blank" className="box__button">
        Leer más
      </a>
    </article>
  );
}
