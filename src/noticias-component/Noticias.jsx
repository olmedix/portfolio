import { useState, useEffect } from "react";
import { Caja } from "../caja-component/Caja";
import CajaContenedor from "../caja-component/Caja";
import axios from "axios";

export default function Noticias() {
  const [newsletter, setNewsletter] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [change, setChange] = useState("");

  const apiKey = "pub_60518d72f7742373e75d808ffe354ca9781e9";
  const url = "https://newsdata.io/api/1/news?apikey=pub_60518d72f7742373e75d808ffe354ca9781e9&q=technology ";
  

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, {
          params: {
            apikey: apiKey,
            category: "technology",
          },
        });
        setNewsletter(response.data.results);
        console.log(response.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, []);
  
 
  

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        style={{ width: "70%", padding: "10px", margin: "10px auto", borderRadius:"10px" }}
        type="text"
        placeholder="Buscar noticias por título"
        onChange={e => setChange(e.target.value)}
      />

      <CajaContenedor>
        {isLoading && <p>Cargando noticias...</p>}

        {newsletter.length > 0 ? (
          newsletter.filter((noticia) => noticia.title.toLowerCase().includes(change.toLowerCase())).map((noticia) => (
            <Caja
              category={noticia.category}
              img={noticia.image_url}
              imgTitle={noticia.title}
              title={noticia.title}
              text={noticia.description || "Sin descripción"}
              link={noticia.link}
              linkText="Leer más"
            />
          ))
        ) : (
          !isLoading && <p>No se encontraron noticias.</p>
        )}
      </CajaContenedor>
    </div>
  );
  
}
