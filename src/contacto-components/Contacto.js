import "./contacto.css";

export default function Contacto() {
  return (
    <>
      <div className="contact__container">
        <h2 className="contact__title">
          ¿Quieres contactar conmigo? ¡Estaré encantado de conocerte!
        </h2>

        <fieldset className="contact__fieldset">
          <legend className="contact__legend">Información de contacto</legend>

          <form className="contact__form">
            <label className="contact__label" for="nombre">
              Nombre (requerido)
            </label>
            <input
              className="contact__input"
              type="text"
              name="nombre"
              id="nombre"
              required
            />

            <label className="contact__label" for="email">
              Email (requerido)
            </label>
            <input
              className="contact__input"
              type="email"
              name="email"
              id="email"
              required
            />

            <label className="contact__label" for="telf">
              Número de teléfono
            </label>
            <input
              className="contact__input"
              type="tel"
              name="telf"
              id="telf"
              pattern="\+[0-9]{1,3}[0-9]{3,14}"
              placeholder="+34123456789"
            />

            <label className="contact__label" for="asunto">
              Asunto
            </label>
            <input
              className="contact__input"
              type="text"
              name="asunto"
              id="asunto"
            />

            <label className="contact__label" for="mensaje">
              Mensaje
            </label>
            <textarea
              className="contact__textarea"
              name="mensaje"
              id="mensaje"
            ></textarea>

            <button className="contact__submit" type="submit">
              Enviar
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
