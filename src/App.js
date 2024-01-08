import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //let count = 0;
  const [number, setNumber] = useState(0);

  function increase() {
    setNumber(number + 1);
  }

  const descrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <div className="container">
        <h1>{number}</h1>
        <div className="button-container">
          <button type="button" onClick={increase}>
            -
          </button>
          <button type="button" onClick={(descrease, console.log("🤔"))}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
