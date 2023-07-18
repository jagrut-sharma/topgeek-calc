import { useState } from "react";
import { initialInputCalc } from "../constants";

export default function Calculator() {
  const [result, setResult] = useState("");
  const [nums, setNums] = useState(initialInputCalc);

  const handleChange = (e) => {
    setNums({ ...nums, [e.target.name]: e.target.value });
  };

  const handleCalc = (operation) => {
    if (operation === "add") {
      setResult(+nums.numOne + +nums.numTwo);
    } else if (operation === "subtract") {
      setResult(+nums.numOne - +nums.numTwo);
    } else if (operation === "multiply") {
      setResult(+nums.numOne * +nums.numTwo);
    } else {
      setResult(+nums.numOne / +nums.numTwo);
    }
  };

  const handleClear = () => {
    setNums(initialInputCalc);
    setResult("");
  };

  return (
    <div className="calculator-container">
      <div>
        <label htmlFor="numOne">Enter Number One:</label>
        <input
          type="number"
          name="numOne"
          id="numOne"
          placeholder="Enter number one"
          onChange={handleChange}
          value={nums.numOne}
        />
      </div>

      <div>
        <label htmlFor="numTwo">Enter Number Two:</label>
        <input
          type="number"
          name="numTwo"
          id="numTwo"
          placeholder="Enter number two"
          onChange={handleChange}
          value={nums.numTwo}
        />
      </div>

      <div className="btn-container">
        <button onClick={() => handleCalc("add")}>Add</button>
        <button onClick={() => handleCalc("subtract")}>Subtract</button>
        <button onClick={() => handleCalc("multiply")}>Multiplication</button>
        <button onClick={() => handleCalc("divide")}>Division</button>
      </div>

      {result ?? <h3>{result}</h3>}

      <button onClick={handleClear}>Clear</button>
    </div>
  );
}
