import React from "react";
import { useState } from "react";
import "./stylesSumadorNumeros.css";

export const SumadorNumeros = () => {
  const [num, setNum] = useState("");
  const [total, setTotal] = useState(0);

  const afegirNum = (num) => {
    return parseFloat(num) || num === 0
      ? setTotal(total + parseFloat(num))
      : setNum(0);
  };

  return (
    <>
      <h1>Sumador de Números</h1>
      <div className="container-sumNum">
        <label>{"Valor: "}</label>
        <input
          className="input-sumNum"
          type="number"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <br />
        <label>{"Total: "}</label>
        <input className="input-sumNum" type="number" value={total} />
        <br />
        <button className="button-sumNum" onClick={() => afegirNum(num)}>
          SUMAR
        </button>
      </div>
    </>
  );
};
