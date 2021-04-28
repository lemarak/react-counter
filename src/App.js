import "./App.css";

import { useState } from "react";
import Button from "./components/Button";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container">
      <div className="group-result">
        <Button counter={counter} setCounter={setCounter} operator="-" />
        <div className="result">{counter}</div>
        <Button counter={counter} setCounter={setCounter} operator="+" />
      </div>
      <Reset counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
