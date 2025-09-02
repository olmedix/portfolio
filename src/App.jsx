import "./App.css";
import Proyectos from "./proyectos-component/Proyecto";
import Home from "./home-component/Home";
import Navegador from "./navegador-component/navegador";
import SobreMi from "./sobreMi-component/SobreMi";
import Contacto from "./contacto-component/Contacto";
import Noticias from "./noticias-component/Noticias";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          {/* <Route path="/contacto" element={<Contacto />} /> */}
          <Route path="/noticias" element={<Noticias />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
