import "./proyecto.css";
import Header from "../Header";
import CajaContenedor from "../caja-components/Caja";
import { Caja } from "../caja-components/Caja";

export default function Proyectos() {
  return (
    <>
      <Header />
      <CajaContenedor>
        <Caja
          img="imgProyectos/portfolio.png"
          imgTitle="Portfolio personal"
          title="PORTFOLIO"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem illum
          pariatur doloremque maiores sint. Praesentium autem blanditiis porro,
          adipisci error, rerum maiores nostrum impedit vitae architecto sint
          consequuntur ipsam neque?"
          link="https://www.creativefabrica.com/es/product/email-newsletter-template-tech/"
          linkText="Leer más"
        />
      </CajaContenedor>
    </>
  );
}
