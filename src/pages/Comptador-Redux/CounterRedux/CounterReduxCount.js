import { useSelector } from "react-redux";
import { getCount } from "./counterRed";
import React from "react";


export function CounterReduxCount() {
  //useSelector --> rep una funció que donat un estat, em calcula el que necessito (que és l'estat anterior)
  const count = useSelector(getCount);
  // encapsulem la funció del useSelector, en una funció getCount()
  return (
    <>
      <h1>Counter Redux</h1>
      <div>{count}</div>
    </>
  );
}
