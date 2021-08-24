import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const formCount = () => (count === 0 ? "Zero" : count);

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += count === 0 ? "danger" : "primary";
    return classes;
  };
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button type="button" className="btn btn-success m-2" onClick={handleIncrement}>
        +
      </button>
      <button
        type="button"
        className="btn btn-danger m-2"
        onClick={handleDecrement}
        disabled={count === 0 ? true : false}
      >
        -
      </button>
    </>
  );
};

export default Counter;
