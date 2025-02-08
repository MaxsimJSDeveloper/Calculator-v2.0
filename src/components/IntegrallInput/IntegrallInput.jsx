import { useState } from "react";

const IntegrallInput = () => {
  const [value, setValue] = useState("");
  const [factorial, setFactorial] = useState(null);

  const calculateFactorial = (num) => {
    if (num < 0) return "Factorial is not defined for negative numbers";
    if (num === 0 || num === 1) return 1;

    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const numValue = e.target.elements.num.value.trim();

    if (isNaN(numValue) || numValue === "") {
      setValue("Please input a correct number");
      setFactorial(null);
    } else {
      const num = Number(numValue);
      setFactorial(calculateFactorial(num));
      setValue(`Factorial of ${num} is:`);
    }
  };

  return (
    <>
      <h2>Calculate factorial</h2>
      <form onSubmit={handleSubmit}>
        <input name="num" />
        <button type="submit">Calk</button>
      </form>
      <p>{value}</p>
      {factorial !== null && <p>{factorial}</p>}
    </>
  );
};

export default IntegrallInput;
