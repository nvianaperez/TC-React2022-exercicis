/******** USEREDUCER AMB PATRONS **********/
import React from "react";
import { useReducer } from "react";
import "../stylesCompUseReducer.css";
import { counter } from "./counterUseReduc";
import { CounterCallBackIncrement } from "./CounterCallBackIncrement";
import { CounterCallBackReset } from "./CounterCallBackReset";
import { CounterUseReducerCount } from "./CounterUseReducerCount";

export function CounterUseReducer() {
  const [count, dispatch] = useReducer(counter, 0);

  return (
    <div className="comptador-container">
      <CounterUseReducerCount count={count} />
      <CounterCallBackIncrement dispatch={dispatch} amount={"+1"} />
      <CounterCallBackIncrement dispatch={dispatch} amount={"-1"} />
      <CounterCallBackReset dispatch={dispatch} />
    </div>
  );
}
