import React from "react";
import { increment } from "./counterUseReduc";

export function CounterCallBackIncrement({ dispatch, amount }) {
  return <button className="comptador-button" onClick={() => dispatch(increment(+amount))}>{amount}</button>;
}
//(+amount) --> perque l'argument quan crido el component es un string
