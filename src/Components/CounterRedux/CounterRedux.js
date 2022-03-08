/******** USEREDUX  **********/

import '../../App.css';
import React from "react";
import { CounterReduxReset } from "./CounterReduxReset";
import { CounterReduxIncrement } from "./CounterReduxIncrement";
import { CounterReduxCount } from "./CounterReduxCount";

export function CounterRedux() {

  return (
    <div className="Comptador-container">
      <CounterReduxCount />
      <CounterReduxIncrement amount="+1" />
      <CounterReduxIncrement amount="-1" />
      <CounterReduxReset />
    </div>
  );
}