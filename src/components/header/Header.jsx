import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const counter = useSelector((state) => state.counter.velue);
  console.log(counter);
  return <div>count {counter}</div>;
};

export default Header;
