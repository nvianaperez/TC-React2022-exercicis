import React from "react";
import { reset } from "./counterUseReduc";

export function CounterCallBackReset({ dispatch }) {
  return <button className="comptador-button" onClick={() => dispatch(reset())}>reset</button>;
}
