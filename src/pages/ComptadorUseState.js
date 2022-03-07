import {useState} from "react";
import '../App.css';
import React from "react";

export function ComptadorUseState() {
  const counter =  (state) => state + 1;
  const [count,setCount] = useState(0);
  return (
    <div className="Comptador-container">
      <h1>Counter useState</h1>
      <div>{count}</div>
      <button className="Comptador-button" onClick={()=>setCount(counter)}>+1</button>
    </div>
  );
}

