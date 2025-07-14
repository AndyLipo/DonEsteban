import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route element={<About />} />
        <Route element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
