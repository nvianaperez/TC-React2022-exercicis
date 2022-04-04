import React, { useState, useEffect } from "react";
import { DiaEnText, MesEnText } from "./ConvertirDataActual";
import "./stylesRellotgeDigital.css";

export const ADosDigits = (num) => {
  return ("0" + num).slice(-2); // els dos últims dígits
};

//DATA ACTUAL
let avui = new Date();
let dataActual =
  DiaEnText(avui.getDay()) +
  ", " +
  ADosDigits(avui.getDate()) +
  " de " +
  MesEnText(avui.getMonth()) +
  " del " +
  avui.getFullYear();

export function RellotgeDigital() {
  const [count, setCount] = useState(0);
  const [mostrarData, setMostrarData] = useState("data-display");
  const [textBoto, setTextBoto] = useState("Amagar Data");

  //HORA ACTUAL
  let horaActual = new Date().toLocaleTimeString();

  useEffect(() => {
    setInterval(() => {
      setCount((n) => n + 1);
    }, 1000);
  }, []);

  const cambiardata = (valor) => {
    return valor === "horaRellotge-amagar"
      ? (setMostrarData("hora-display"), setTextBoto("Amagar Data"))
      : (setMostrarData("horaRellotge-amagar"), setTextBoto("Mostrar Data"));
  };

  return (
    <>
      <h1>Rellotge Digital</h1>
      <div className="container-display">
        <h3 className="hora-display">{horaActual}</h3>
        <h5 className={mostrarData}>{dataActual} </h5>
        <button
          className="toggle-button"
          onClick={() => cambiardata(mostrarData)}
        >
          {textBoto}
        </button>
      </div>
    </>
  );
}
