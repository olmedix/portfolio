import { useState, useEffect } from "react";
import { Caja } from "../caja-component/Caja";
import CajaContenedor from "../caja-component/Caja";
import Loading from "../components/Loading";
import axios from "axios";
import NoComponent from "../components/NoComponent";

export default function Noticias() {
  const [newsletter, setNewsletter] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [change, setChange] = useState("");
  const [category, setCategory] = useState("all");

  const apiKey = "pub_60518d72f7742373e75d808ffe354ca9781e9";
  const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${category}&language=es`;

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setNewsletter(response.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoticias();
  }, [category]);
  
 
  

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        style={{ width: "70%", padding: "10px", margin: "10px auto", borderRadius:"10px" }}
        type="text"
        placeholder="Buscar noticias por título"
        onChange={e => setChange(e.target.value)}
      />

      <select name="wordSearch" 
              id="wordSearch"
              style={{ width: "15%", padding: "10px", margin: "10px auto", borderRadius:"10px" }}
              onChange={e => setCategory(e.target.value)}    
          >
        <option value="all">Categorías</option>
        <option value="technology">Tecnología</option>
        <option value="science">Ciencia</option>
        <option value="health">Salud</option>
        <option value="business">Negocios</option>
        <option value="sports">Deportes</option>
      </select>

      <CajaContenedor>
        {isLoading && <Loading name={"noticias"}/>}


        {newsletter.length > 0 ? (
          newsletter.filter((noticia) => noticia.title.toLowerCase().includes(change.toLowerCase())).map((noticia) => (
            <Caja
              category={noticia.category}
              img={noticia.image_url || "/img/imgNoticias/NoImage.jpg"}
              imgTitle={noticia.title}
              title={noticia.title}
              text={noticia.description || "Sin descripción"}
              link={noticia.link}
              linkText="Leer más"
            />
          ))
        ) : (
          !isLoading && <NoComponent name={"noticias"} />
        )}
      </CajaContenedor>
    </div>
  );
  
}
