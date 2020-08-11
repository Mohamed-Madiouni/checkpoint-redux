import { INCR, DECR } from "../action/types";

const initialCount = {
  count: 0,
};

const CounterReducer = (state = initialCount, action) => {
//   console.log("count", state, action);
  switch (action.type) {
    case INCR:
      return {
        count: state.count + 1,
      };

    case DECR:
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};


  

export default CounterReducer;
