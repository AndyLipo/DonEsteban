import { Routes, Route, Navigate } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollTotop/ScrollToTop";
import "./App.css";
import { Destapacion } from "./Components/Works/Destapacion";
import { Plomeria } from "./Components/Works/Plomeria";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/destapacion" element={<Destapacion />} />
        <Route path="/plomeria" element={<Plomeria />} />

        {/* Redirects por si alguien llega a las URLs con mayúscula */}
        <Route path="/About" element={<Navigate to="/about" replace />} />
        <Route path="/Contacto" element={<Navigate to="/contacto" replace />} />
        <Route path="/Destapacion" element={<Navigate to="/destapacion" replace />} />
        <Route path="/Plomeria" element={<Navigate to="/plomeria" replace />} />
        <Route path="/Inicio" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;