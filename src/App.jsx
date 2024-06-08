import { useState } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirst] = useState("");
  const [operation, setOperation] = useState("");
  const [secondNum, setSecond] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [isCalc, setIsCalc] = useState(false);

  const inputFirstNum = (e) => {
    if (firstNum && operation) return;
    setFirst(Number(firstNum + e.target.value));
  };

  const inputOperation = (e) => {
    setIsCalc(true);
    if (!firstNum) return;
    if (!isClick && isCalc && secondNum) {
      getSum();
    }
    setOperation(e.target.value);
    if (isCalc) {
      setSecond("");
      setIsClick(false);
    }
  };

  const inputSecondNum = (e) => {
    if (!firstNum || !operation) return;
    setSecond(Number(secondNum + e.target.value));
  };

  const getSum = () => {
    setIsClick(true);
    let result;
    if (operation === "+") {
      result = Number(firstNum) + Number(secondNum);
    } else if (operation === "-") {
      result = Number(firstNum) - Number(secondNum);
    } else if (operation === "x") {
      result = Number(firstNum) * Number(secondNum);
    } else if (operation === "/") {
      if (secondNum === 0) {
        return "Error: Division by zero";
      }
      result = Number(firstNum) / Number(secondNum);
    } else {
      result = "";
    }
    setFirst(result);
  };

  const changeSign = () => {
    if (operation === "" || (secondNum !== "" && operation !== "" && isClick)) {
      setFirst(-firstNum);
    }
    if (operation === "+" && secondNum === "") {
      setOperation("-");
    }
    if (operation === "-" && secondNum === "") {
      setOperation("+");
    }
    if (operation !== "" && !isClick) {
      setSecond(-secondNum);
    }
  };

  const inputDot = (e) => {
    const dot = e.target.value;
    if (!isClick) {
      if (operation === "" && !firstNum.toString().includes(".")) {
        setFirst(firstNum + dot);
      } else if (operation !== "" && !secondNum.toString().includes(".")) {
        setSecond(secondNum + dot);
      }
    } else {
      if (operation === "") {
        setFirst("0" + dot);
        setIsClick(false);
      } else {
        setSecond("0" + dot);
        setIsClick(false);
      }
    }
  };

  const reset = () => {
    setOperation("");
    setFirst("");
    setSecond("");
    setIsClick(false);
    setIsCalc(false);
  };

  const calcLength = () => {
    const length = `${firstNum}${operation}${secondNum}`.length;
    if (length > 16) return "1.5em";
    if (length > 10) return "2em";
    if (length > 8) return "3em";
  };

  return (
    <div className="container" translate="no">
      <div className="result">
        <p className={"output"} style={{ fontSize: calcLength() }}>
          <span>{firstNum === "" ? "0" : firstNum}</span>
          <span className={isClick ? "hidden" : ""}>{operation}</span>
          <span className={isClick ? "hidden" : ""}>{secondNum}</span>
        </p>
      </div>
      <div className="buttons">
        <button onClick={reset} className="btn bg-grey">
          ac
        </button>
        <button onClick={changeSign} className="btn bg-grey" value="+/-">
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
        <button onClick={inputOperation} className="btn bg-orange" value="x">
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
        <button onClick={inputOperation} className="btn bg-orange" value="-">
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
        <button onClick={inputOperation} className="btn bg-orange" value="+">
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
        <button
          onClick={(e) => {
            inputDot(e);
          }}
          className="btn dot"
          value="."
        >
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
