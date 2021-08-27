import React, { useState } from "react";

import Counter from "./counter";

const Counters = () => {
  const initialState = [
    { value: 1, id: 1, name: "Ложка" },
    { value: 1, id: 2, name: "Вилка" },
    { value: 1, id: 3, name: "Нож" },
    { value: 2, id: 4, name: "Чашка" },
    { value: 3, id: 5, name: "Тарелка" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((counter) => counter.id !== id));
  };

  const handleIncrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          counter.value += 1;
        }
        return counter;
      })
    );
  };

  const handleDecrement = (id) => {
    setCounters(
      counters.map((counter) => {
        if (counter.id === id) {
          counter.value -= 1;
        }
        return counter;
      })
    );
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <div>
      <button className="btn btn-primary btn-sm m2" onClick={handleReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
