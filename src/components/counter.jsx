import React from "react";
const Counter = ({ name, id, value, onDelete, onIncrement, onDecrement }) => {
  const formValue = () => (value === 0 ? "Zero" : value);

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <div>
      <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button type="button" className="btn btn-success m-2" onClick={() => onIncrement(id)}>
        +
      </button>
      <button
        type="button"
        className="btn btn-danger m-2"
        onClick={() => onDecrement(id)}
        disabled={value === 0 ? true : false}
      >
        -
      </button>
      <button className="btn btn-danger btm-sm m2" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Counter;
