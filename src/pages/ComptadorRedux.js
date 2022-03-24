/**************** REDUX AMB PATRONS **************/
import React from "react";
import { CounterUseReducer } from "../Components/CounterUseReducer/CounterUseReducer";
import { combineReducers, createStore } from "redux";
import { counter } from "../Components/CounterRedux/counterRed";
import { Provider } from "react-redux";
import { CounterReduxCount } from "../Components/CounterRedux/CounterReduxCount";
import { CounterReduxIncrement } from "../Components/CounterRedux/CounterReduxIncrement";
import { CounterReduxReset } from "../Components/CounterRedux/CounterReduxReset";
//la ruta de CounterRedux és errònea, llavors anirà a buscar el index.js
import { CounterRedux } from "../Components/CounterRedux/CounterRedux";


//quan volem combinar diferents objectes amb diferents estats utilitzem l'API combineReducers
const reducer = combineReducers({
  counter,
  // llista,
  // usuaris,...
})
//combineReducer canvia la forma de l'state --> getCount


const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// l'estat inicial l'informem al reducer (counter) on hi ha la lògica


export function ComptadorRedux() {
  return (
    <Provider store={store}>
      <>
        <CounterRedux />
        <CounterRedux />
        <CounterUseReducer />
        <br />
        <hr />
        <CounterReduxCount />
        <CounterReduxIncrement amount="+44" />
        <CounterReduxReset />
      </>
    </Provider>
  );
}




// import CounterUseReducer from "./CounterUseReducer";
// import { createStore } from "redux";
// import { counter } from "./counter";
// import { Provider } from "react-redux";
// import CounterRedux from "./CounterRedux";

// //creo el store, que és on es guardarà l'estat de tota l'aplicació.
// // li passem el reducer i l'estat inicial
// const store = createStore(counter, 0);
// //store té dos mètodes:
// // store.dispatch(increment(+1));
// // console.log("state", store.getState());

// export default function App() {
//   return (
//     <Provider store={store}>
//       <>
//         <CounterRedux />
//         <CounterRedux />
//         <CounterUseReducer />
//         <CounterUseReducer />
//       </>
//     </Provider>
//   );
// }
