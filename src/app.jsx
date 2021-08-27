import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
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

  const getTotalCountersValue = counters.reduce((a, c) => a + c.value, 0);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={getTotalCountersValue} />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
