import React from "react";
import ReactDOM from "react-dom";

import Counter from "./components/counter";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById("root")
);
