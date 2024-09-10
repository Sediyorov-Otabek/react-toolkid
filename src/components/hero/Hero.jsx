import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, rest } from "../../redux/counter-slice";

const Hero = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.velue);
  return (
    <div>
      <button onClick={() => dispatch(inc(1))}>increment</button>
      <button onClick={() => dispatch(inc(10))}>increment</button>
      <button onClick={() => dispatch(rest(10))}>reset</button>
      <button disabled={counter <= 0} onClick={() => dispatch(dec(1))}>
        decrement
      </button>
    </div>
  );
};

export default Hero;
