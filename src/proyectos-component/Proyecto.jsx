import CajaContenedor from "../caja-component/Caja";
import { Caja } from "../caja-component/Caja";
import React, { useEffect,useState } from 'react';
import NoProyectos from "./NoProyectos";


export default function Proyectos() {

  const[projects,setProjects] = useState([]);
  const[loading,setLoading] = useState(true);

  const proyectos = async () =>{

    try {
      
        const response = await fetch('/data/proyectos.json');

        const data = await response.json();
      
        setProjects(data);
        setLoading(true);
        
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  
  }

  useEffect(() => {
      proyectos();
}, []);

  return (

    !loading ? <NoProyectos/> :
    <div>
      <CajaContenedor>
      {
        projects.map(dato =>(
       
        <Caja key={dato.id}
        img= {`/img/imgProyectos/${dato.imagen}`} 
        imgTitle= {dato.tituloImagen}
        title= {dato.titulo}
        text = {dato.contenido}
        link = {dato.github}
        linkText="Ver código"
      />
    ))}
            
      </CajaContenedor>
    </div>
  );
}
