import "./App.css";
import Header from "./Header";
import Proyectos from "./proyectos-components/Proyecto";
import Home from "./home-components/Home";
import Navegador from "./navegador-component/navegador";
import SobreMi from "./sobreMi-components/SobreMi";
import Contacto from "./contacto-components/Contacto";
import Noticias from "./noticias-components/Noticias";
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
        <Header />
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre mi" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="*" element={<Navigate replate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
