const JUGA = "ticToe/JUGA";

export function juga(indexCasella) {
  return { type: JUGA, indexCasella };
}

export const initialTaulell = ["", "", ""];

export function ticToe(state, action) {
  switch (action.type) {
    case JUGA: {
      const jugadorActual = caculaJugadorActual(state);
      const indexCasella = action.indexCasella;
      const copy = [...state];
      copy[indexCasella] = jugadorActual;
      return copy;
    }
    default:
      return state;
  }
}

function caculaJugadorActual(taulell) {
  const numeroDeJugades = taulell.filter((peça) => peça !== "").length;
  if (numeroDeJugades % 2 === 0) return "X";
  return "O";
}
