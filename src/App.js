import React, { useState } from "react";

import "./styles.css";

const UseStateObject = () => {
  let data = 0;
  let [iteration, setIteration] = useState(data);
  const incrementNumber = () => {
    setIteration(iteration + 1);
  };
  const decreaseNumber = () => {
    setIteration(iteration - 1);
  };
  const resetCounter = () => {
    setIteration(0);
  };
  return (
    <React.Fragment>
      <h3>{iteration}</h3>
      <button className="btn" onClick={incrementNumber}>
        Add number
      </button>
      <button className="btn" onClick={decreaseNumber}>
        Decrease number
      </button>{" "}
      <button className="btn" onClick={resetCounter}>
        Reset Counter
      </button>
    </React.Fragment>
  );
};
export default UseStateObject;
