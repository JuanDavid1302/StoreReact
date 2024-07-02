import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./components/Home";
import Hombre from "./components/Hombre";
import Mujer from "./components/Mujer";
import Nino from "./components/Nino";
import Nina from "./components/Nina";
import Contactanos from "./components/Contactanos";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        {/* Spacer para evitar que el contenido se superponga con la barra de navegación fija */}
        <div style={{ height: "70px" }}></div>{" "}
        {/* Ajusta esta altura según el tamaño de tu barra de navegación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hombre" element={<Hombre />} />
          <Route path="/mujer" element={<Mujer />} />
          <Route path="/ninos" element={<Nino />} />
          <Route path="/ninas" element={<Nina />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
