/******** USEREDUX  **********/

import { useDispatch, useSelector } from "react-redux";
import '../../App.css';
import { increment, reset, getCount } from "./counterRed";
import React from "react";

export function CounterReduxCount() {
  //useSelector --> rep una funció que donat un estat, em calcula el que necessito (que és l'estat anterior)
  const count = useSelector( getCount );
  // encapsulem la funció del useSelector, en una funció getCount()
  
  return(
    <>
      <h1>Counter Redux</h1>
      <div>{count}</div>
    </>
  )
}

export function CounterReduxIncrement({ amount }) {
  const dispatch = useDispatch();
  return <button className="Comptador-button" onClick={ ()=> dispatch(increment(+amount)) }>{amount}</button>
}

export function CounterReduxReset() {
  const dispatch = useDispatch();
  return <button className="Comptador-button" onClick={ ()=> dispatch(reset()) }>reset</button> 
}


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