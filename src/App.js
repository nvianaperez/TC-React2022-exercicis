import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Avatar from "./pages/Avatar";
import Calculadora from "./pages/Calculadora";
import Comptador from "./pages/Comptador";
import GraellaFotos from "./pages/GraellaFotos";
import Acordio from "./pages/Acordio";
import ToggleButton from "./pages/ToggleButton";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="avatar" element={<Avatar />} />
            <Route path="calculadora" element={<Calculadora />} />
            <Route path="comptador" element={<Comptador />} />
            <Route path="graella-fotos" element={<GraellaFotos />} />
            <Route path="acordio" element={<Acordio />} />
            <Route path="toggle-button" element={<ToggleButton />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
