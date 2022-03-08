const INCREMENT = "counter/INCREMENT";

export function increment(amount) {
  return { type: INCREMENT, amount };
}


const RESET = "counter/RESET";

export function reset() {
  return { type: RESET };
}

//informo l'estat inicial
export function counter(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.amount;
    case RESET:
      return 0;
    default:
      return state;
  }
}

export function getCount(state) {
  console.log(state); // {counter:0}
  return state.counter;
}
