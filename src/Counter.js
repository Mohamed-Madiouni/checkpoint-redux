import React from "react";
import { connect } from "react-redux";
import { Incr } from "./action/incrAction";
import { Decr } from "./action/decrAction";



const Counter = (props) => {
  console.log(props);
  // const increment = () => {
  //   props.dispatch({ type: "INCREMENT" });
  // };

  // const decrement = () => {
  //   props.dispatch({ type: "DECREMENT" });
  // };

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={props.decrement}>-</button>
        <span className="count">{props.count}</span>
        <button onClick={props.increment}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.CounterReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(Incr()),
    decrement: () => dispatch(Decr()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
