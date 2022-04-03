// import React, { useState, useEffect } from "react";
// import {
//   DiaEnText,
//   avui,
//   ADosDigits,
//   MesEnText,
// } from "../Components/CompRellotgeDigital/ConvertirDataActual";

// let time = new Date().toLocaleTimeString();
// let dataActual =
//   DiaEnText(avui.getDay()) +
//   ", " +
//   ADosDigits(avui.getDate()) +
//   " de " +
//   MesEnText(avui.getMonth()) +
//   " del " +
//   avui.getFullYear();

// export function RellotgeDigital() {
//   const [mostrarData, setMostrarData] = useState("rellotge-mostrar");
//   const [textBoto, setTextBoto] = useState("Amagar Data");
//   const cambiardata = (valor) => {
//     return (
//       if (valor === "rellotge-amagar") ? (setMostrarData("rellotge-amagar"), setTextBoto("Mostrar Data"))
//       : (setMostrarData("rellotge-mostrar"), setTextBoto("Amagar Data"));
//       if (valor === "rellotge-mostrar") ? (setMostrarData("rellotge-mostrar"), setTextBoto("Amagar Data"))
//       : (setMostrarData("rellotge-amagar"), setTextBoto("Mostrar Data"));

//   };

//   return (
//     <>
//       <h3>Rellotge Digital</h3>
//       <div>
//         <h5 className={mostrarData}>{time}</h5>
//         <h5 className={mostrarData}>{dataActual} </h5>
//       </div>
//       <button onClick={() => cambiardata(mostrarData)}>{textBoto}</button>
//     </>
//   );

//   // useEffect(() => {
//   //   const intervalID = setInterval(() => {
//   //     setTime((n) => n + 1);
//   //   }, 1000);
//   //   return () => clearInterval(intervalID);
//   // }, []);
// }
