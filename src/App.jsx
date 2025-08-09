import { Routes, Route, Router } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import './App.css'
import ScrollToTop from "./Components/ScrollTotop/ScrollToTop";

function App() {
  return (
    <>

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contacto" element={<Contact />} />
        <Route path="/Inicio" element={<Home />} />
      </Routes>
    </>
  )
}

export default App