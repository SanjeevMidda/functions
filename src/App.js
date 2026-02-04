import { useState } from "react";
import "./index.css";

function App() {
  const [money, setMoney] = useState(0);
  const [clicked, setClicked] = useState(0);

  const decrease = () => {
    setMoney(money - 5);
    setClicked(0);
  };

  const reset = () => {
    setMoney(0);
    setClicked(clicked + 1);
  };

  const increase = () => {
    setMoney(money + 5);
    setClicked(0);
  };

  return (
    <div className="App">
      <h1>£{money}</h1>

      <div className="actions">
        <button onClick={decrease}>D</button>
        <button onClick={reset}>R</button>
        <button onClick={increase}>I</button>
      </div>

      {clicked > 2 && <p>please add or minus!</p>}
    </div>
  );
}

export default App;
