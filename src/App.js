import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPage";
import llista from "./pages/llista";

//UNIC EXPORT DEFAULT
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {llista.map((el) => (
          <Route path={el.path} element={el.element} />
          ))}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

