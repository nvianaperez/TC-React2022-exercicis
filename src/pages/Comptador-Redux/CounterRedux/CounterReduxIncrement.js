import { useDispatch } from "react-redux";
import { increment } from "./counterRed";
import React from "react";


export function CounterReduxIncrement({ amount }) {
  const dispatch = useDispatch();
  return <button className="Comptador-button" onClick={() => dispatch(increment(+amount))}>{amount}</button>;
}
