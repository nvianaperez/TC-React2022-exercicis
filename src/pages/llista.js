import React from "react";
import { Avatar } from "./Avatar/Avatar";
import { Calculadora } from "./Calculadora/Calculadora";
import { Comptador } from "./Comptador+5/Comptador";
import { GraellaFotos } from "./GraellaFotos/GraellaFotos";
import { Acordio } from "./Acordio/Acordio";
import { ToggleButton } from "./ToggleButton/ToggleButton";
import { ComptadorUseState } from "./Comptador-useState/ComptadorUseState";
import { ComptadorUseReducer } from "./Comptador-useReducer/ComptadorUseReducer";
import { ComptadorRedux } from "./Comptador-Redux/ComptadorRedux";
import { Carrusel } from "./Carrusel/Carrusel";
import { GroupButton } from "./GroupButton/GroupButton";
import { ToggleableSidebar } from "./ToggleSidebar/ToggleableSidebar";
import { Tabs } from "./Tabs/Tabs";
import { RellotgeDigital } from "./RellotgeDigital/RellotgeDigital";
import { SumadorNumeros } from "./SumadorNumeros/SumadorNumeros";
// import { TicToe } from "./TicToe/TicToe";

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
    path: "/tabs",
    titol: "Tabs",
    element: <Tabs />,
  },
  {
    path: "/sumador-numeros",
    titol: "Sumador Números",
    element: <SumadorNumeros />,
  },

  {
    path: "/rellotge-digital",
    titol: "Rellotge digital",
    element: <RellotgeDigital />,
  },
  // {
  //   path: "/tic-toe",
  //   titol: "Tic Toe",
  //   element: <TicToe />,
  // },

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
