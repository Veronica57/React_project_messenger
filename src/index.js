import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const ReactElement = (
  <div>
    <h1>Hello React</h1>
  </div>
);

const FunctionComponent = () => {
  return ReactElement;
};

ReactDOM.render(
  <React.StrictMode>
    <FunctionComponent />
  </React.StrictMode>,
  document.getElementById("root")
);
