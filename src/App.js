import React from 'react';
import './App.css';
import Counter from './Counter';




// const initialState = {
//   count: 0,
//   MONEY:{
//     a:3,
//     b:4
//   }
// };

// const reducer = (state=initialState, action) => {
//   console.log('reducer', state, action);
//   switch(action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + 1
//       };
//     case 'DECREMENT':
//       return {
//         count: state.count - 1
//       };
//     case 'RESET':
//       return {
//         count: 0
//       };
//     default:
//       return state;
//   }
// }

// const store =createStore(reducer,applyMiddleware(logger))
// // store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// store.dispatch({ type: "RESET" });


function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
