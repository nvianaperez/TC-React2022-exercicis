/******** USEREDUX  **********/

import { useDispatch, useSelector } from "react-redux";
import '../../App.css';
import { increment, reset, getCount } from "./counterRed";
import React from "react";


export default function CounterUseReducer() {
    //useSelector --> rep una funció que donat un estat, em calcula el que necessito (que és l'estat anterior)
    
    const count = useSelector( getCount );
    // encapsulem la funció del useSelector, en una funció getCount()

    const dispatch = useDispatch();


  return (
    <div className="Comptador-container">
      <h1>Counter useRedux</h1>
      <div>{count}</div>
      <button className="Comptador-button" onClick={ ()=> dispatch(increment(+1)) }>+1</button>
      <button className="Comptador-button" onClick={ ()=> dispatch(increment(-1)) }>-1</button>
      <button className="Comptador-button" onClick={ ()=> dispatch(reset()) }>reset</button>
    </div>
  );
}