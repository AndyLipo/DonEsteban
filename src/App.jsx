import { Routes, Route, Navigate } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ScrollToTop from "./Components/ScrollTotop/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contact />} />

        {/* Redirects por si alguien llega a las URLs con mayúscula */}
        <Route path="/About" element={<Navigate to="/about" replace />} />
        <Route path="/Contacto" element={<Navigate to="/contacto" replace />} />
        <Route path="/Inicio" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;