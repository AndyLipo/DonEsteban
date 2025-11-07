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
        <Route path="/About" element={<About />} />
        <Route path="/Contacto" element={<Contact />} />
        {/* 👇 Redirect en vez de duplicar */}
        <Route path="/Inicio" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
