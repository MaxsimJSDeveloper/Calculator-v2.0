import { useState } from "react";
import Button from "../Button/Button";

const CalculatorLayout = () => {
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
        <Button onClick={reset} className="bg-grey">
          ac
        </Button>
        <Button onClick={changeSign} className="bg-grey">
          +/-
        </Button>
        <Button className="bg-grey">%</Button>
        <Button onClick={inputOperation} className="bg-orange sign">
          /
        </Button>

        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          7
        </Button>
        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          8
        </Button>
        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          9
        </Button>
        <Button onClick={inputOperation} className="bg-orange">
          x
        </Button>

        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          4
        </Button>
        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          5
        </Button>
        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          6
        </Button>
        <Button onClick={inputOperation} className="bg-orange">
          -
        </Button>

        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          1
        </Button>
        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          2
        </Button>
        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
        >
          3
        </Button>
        <Button onClick={inputOperation} className="bg-orange">
          +
        </Button>

        <Button
          onClick={(e) => {
            inputFirstNum(e);
            inputSecondNum(e);
          }}
          className="zero"
        >
          0
        </Button>
        <Button
          onClick={(e) => {
            inputDot(e);
          }}
          className="dot"
        >
          .
        </Button>
        <Button onClick={getSum} className="bg-orange">
          =
        </Button>
      </div>
    </div>
  );
};

export default CalculatorLayout;
