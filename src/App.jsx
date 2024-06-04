import { useState } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirst] = useState("");
  const [operation, setOperation] = useState("");
  const [secondNum, setSecond] = useState("");
  const [result, setResult] = useState("");

  const inputFirstNum = (e) => {
    if (firstNum && operation) return;
    setFirst(Number(firstNum + e.target.value));
  };

  const inputOperation = (e) => {
    if (!firstNum) return;
    setOperation(e.target.value);
  };

  const inputSecondNum = (e) => {
    if (!firstNum || !operation) return;
    setSecond(Number(secondNum + e.target.value));
  };

  const getSum = () => {
    let result;
    if (operation === "+") {
      result = Number(firstNum) + Number(secondNum);
    } else if (operation === "-") {
      result = Number(firstNum) - Number(secondNum);
    } else if (operation === "x") {
      result = Number(firstNum) * Number(secondNum);
    } else if (operation === "/") {
      if (secondNum === 0) {
        setResult("Error: Division by zero");
        return;
      }
      result = Number(firstNum) / Number(secondNum);
    } else {
      result = "";
    }

    // Добавляем результат к первому числу и обновляем состояние
    setFirst(result.toString());
    setOperation("");
    setSecond("");
    setResult("");
  };

  const reset = () => {
    setOperation("");
    setFirst("");
    setSecond("");
    setResult("");
  };

  return (
    <div className="container">
      <div className="result">
        <p className="output">
          {firstNum}
          {operation}
          {secondNum}
        </p>
        <p> {result}</p>
      </div>
      <div className="buttons">
        <button onClick={reset} className="btn bg-grey">
          ac
        </button>
        <button className="btn bg-grey" value="+/-">
          +/-
        </button>
        <button className="btn bg-grey" value="%">
          %
        </button>
        <button
          onClick={inputOperation}
          className="btn bg-orange sign"
          value="/"
        >
          /
        </button>

        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="7"
        >
          7
        </button>
        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="8"
        >
          8
        </button>
        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="9"
        >
          9
        </button>
        <button onClick={inputOperation} className="btn" value="x">
          x
        </button>

        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="4"
        >
          4
        </button>
        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="5"
        >
          5
        </button>
        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="6"
        >
          6
        </button>
        <button onClick={inputOperation} className="btn" value="-">
          -
        </button>

        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="1"
        >
          1
        </button>
        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="2"
        >
          2
        </button>
        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn"
          value="3"
        >
          3
        </button>
        <button onClick={inputOperation} className="btn" value="+">
          +
        </button>

        <button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="btn zero"
          value="0"
        >
          0
        </button>
        <button className="btn dot" value=".">
          .
        </button>
        <button onClick={getSum} className="btn bg-orange">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
