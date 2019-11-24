import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const [timerOn, setTimerOn] = useState(false);

  const increment = () => {
    if (timerOn) {
      let interval = setInterval(() => {
        setCount(prev => prev + step);
      }, 1000);

      return () => clearInterval(interval);
    }
  };

  useEffect(increment, [timerOn]);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setTimerOn(prev => !prev)}>Toggle Timer</button>
      <input
        value={step}
        type="number"
        onChange={e => setStep(Number(e.target.value))}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
