import CajaContenedor from "../caja-component/Caja";
import { Caja } from "../caja-component/Caja";
import React, { useEffect,useState } from 'react';
import NoComponent from "../components/NoComponent";
import Loading from "../components/Loading";


export default function Proyectos() {

  const[projects,setProjects] = useState([]);
  const[loading,setLoading] = useState(true);

  const proyectos = async () =>{

    try {
      setLoading(true);
        const response = await fetch('/data/proyectos.json');
        const data = await response.json();
        setProjects(data); 
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
    }
  }
  useEffect(() => {
      proyectos();
}, []);


  return (

    <div>
      <CajaContenedor>

      {loading && <Loading name={"proyectos"}/>}  
      
      {projects.length > 0 ? (
      projects.map(dato =>(
       
        <Caja key={dato.id}
        img= {`/img/imgProyectos/${dato.imagen}`} 
        imgTitle= {dato.tituloImagen}
        title= {dato.titulo}
        text = {dato.contenido}
        link = {dato.github}
        linkText="Ver código"
      />
    ))) : 
    (
      !loading && <NoComponent name={"proyectos"}/>
    )}
            
      </CajaContenedor>
    </div>
  );
}
