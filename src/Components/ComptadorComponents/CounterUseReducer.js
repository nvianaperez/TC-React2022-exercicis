/******** USEREDUCER AMB PATRONS **********/
import React from "react";
import { useReducer } from "react";
import '../../App.css';
import { counter, increment, reset } from "./counter";

function CounterUseReducerCount ({ count }) {
  return(
    <>
      <h1>Counter useReducer</h1>
      <div>{count}</div>
    </>
  )
}

function CounterCallBackIncrement ({ dispatch , amount }) {
  return <button className="comptador-button" onClick={ ()=> dispatch(increment(+amount)) }>{amount}</button>
}
//(+amount) --> perque l'argument quan crido el component es un string

function CounterCallBackReset ({ dispatch }) {
  return <button className="comptador-button" onClick={ ()=> dispatch(reset()) }>reset</button>
}

export default function CounterUseReducer() {

  const [count, dispatch] = useReducer ( counter, 0);

  return (
    <div className="comptador-container">
      <CounterUseReducerCount count={count} />
      <CounterCallBackIncrement dispatch={dispatch} amount={"+1"} />
      <CounterCallBackIncrement dispatch={dispatch} amount={"-1"} />
      <CounterCallBackReset dispatch={dispatch} />
    </div>
  );
}

