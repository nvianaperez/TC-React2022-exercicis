/******** USEREDUCER AMB PATRONS **********/
import React from "react";
import { useReducer } from "react";
import '../../App.css';
import { counter, increment, reset } from "./counter";

export default function CounterUseReducer() {

  const [count, dispatch] = useReducer ( counter, 0);

  return (
    <div className="comptador-container">
      <h1>Counter useReducer</h1>
      <div>{count}</div>
      <button className="comptador-button" onClick={ ()=> dispatch(increment(+1)) }>+1</button>
      <button className="comptador-button" onClick={ ()=> dispatch(increment(-1)) }>-1</button>
      <button className="comptador-button" onClick={ ()=> dispatch(reset()) }>reset</button>
    </div>
  );
}

