import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Avatar from "./pages/Avatar";
import Calculadora from "./pages/Calculadora";
import Comptador from "./pages/Comptador";
import GraellaFotos from "./pages/GraellaFotos";
import Acordio from "./pages/Acordio";
import ToggleButton from "./pages/ToggleButton";
import ComptadorUseState from "./pages/ComptadorUseState";
import ComptadorUseReducer from "./pages/ComptadorUseReducer";
import ComptadorRedux from "./pages/ComptadorRedux";


import NoPage from "./pages/NoPage";
import React from "react";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="avatar" element={<Avatar />} />
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="comptador" element={<Comptador />} />
          <Route path="graella-fotos" element={<GraellaFotos />} />
          <Route path="acordio" element={<Acordio />} />
          <Route path="toggle-button" element={<ToggleButton />} />
          <Route path="comptador-useState" element={<ComptadorUseState />} />
          <Route path="comptador-useReducer" element={<ComptadorUseReducer />} />
          <Route path="comptador-Redux" element={<ComptadorRedux />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
