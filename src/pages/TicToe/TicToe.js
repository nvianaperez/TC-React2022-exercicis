import React, { useReducer } from "react";
import { ticToe, initialTaulell, juga } from "./ticToeRedux.js";
import "./stylesTicToe.css";

export const TicToe = () => {
  const [taulell, dispatch] = useReducer(ticToe, initialTaulell);

  return (
    <>
      <div>
        <h1>Dos en ratlla</h1>
      </div>
      <div className="TicToe-board">
        {taulell.map((peça, indexCasella) => (
          <button
            key={indexCasella}
            className="TicToe-button"
            onClick={() => dispatch(juga(indexCasella))}
          >
            {peça}
          </button>
        ))}
      </div>
    </>
  );
};
