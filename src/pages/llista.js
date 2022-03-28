import React from "react";
import { Avatar } from "./Avatar";
import { Calculadora } from "./Calculadora";
import { Comptador } from "./Comptador";
import { GraellaFotos } from "./GraellaFotos";
import { Acordio } from "./Acordio";
import { ToggleButton } from "./ToggleButton";
import { ComptadorUseState } from "./ComptadorUseState";
import { ComptadorUseReducer } from "./ComptadorUseReducer";
import { ComptadorRedux } from "./ComptadorRedux";
import { Carrusel } from "./Carrusel";
import { GroupButton } from "./GroupButton";
import { ToggleableSidebar } from "./ToggleableSidebar";

const llista = [
  { path: "/avatar", titol: "Avatar", element: <Avatar /> },
  { path: "/toggle-button", titol: "Toggle button", element: <ToggleButton /> },
  { path: "/comptador", titol: "Comptador", element: <Comptador /> },
  { path: "/group-button", titol: "Group Button", element: <GroupButton /> },
  {
    path: "/toggleable-sidebar",
    titol: "Toggleable sidebar",
    element: <ToggleableSidebar />,
  },

  {
    path: "/graella-fotos",
    titol: "Graella de fotos",
    element: <GraellaFotos />,
  },
  { path: "/acordio", titol: "Acordio", element: <Acordio /> },
  { path: "/carrusel", titol: "Carrusel", element: <Carrusel /> },
  { path: "/calculadora", titol: "Calculadora", element: <Calculadora /> },

  {
    path: "/comptador-useState",
    titol: "Comptador useState",
    element: <ComptadorUseState />,
  },
  {
    path: "/comptador-useReducer",
    titol: "Comptador useReducer",
    element: <ComptadorUseReducer />,
  },
  {
    path: "/comptador-Redux",
    titol: "Comptador Redux",
    element: <ComptadorRedux />,
  },
];

export default llista;
