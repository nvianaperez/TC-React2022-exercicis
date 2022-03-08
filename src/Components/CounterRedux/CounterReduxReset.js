import { useDispatch } from "react-redux";
import { reset } from "./counterRed";
import React from "react";


export function CounterReduxReset() {
  const dispatch = useDispatch();
  return <button className="Comptador-button" onClick={() => dispatch(reset())}>reset</button>;
}
