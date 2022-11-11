import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("0");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleSubNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  };

  const handleMultNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult));
      setOperation("");
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const div = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(div));
      setOperation("");
    }
  };
  const handlePorcentNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("%");
    } else {
      const pCent = (Number(firstNumber) * Number(currentNumber)) / 100;
      setCurrentNumber(String(pCent));
      setOperation("");
    }
  };

  const handleElevate2Numbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setOperation("^2");
    } else {
      const elev = Math.pow(Number(firstNumber), 2);
      setCurrentNumber(String(elev));
      setOperation("");
    }
  };
  const handleSqrtNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setOperation("Sqrt");
    } else {
      const sqrt1 = Math.sqrt(Number(firstNumber));
      setCurrentNumber(String(sqrt1));
      setOperation("");
    }
  };

  const HandleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleSubNumbers();
          break;
        case "*":
          handleMultNumbers();
          break;
        case "/":
          handleDivNumbers();
          break;
        case "%":
          handlePorcentNumbers();
          break;
        case "^2":
          handleElevate2Numbers();
          break;
        case "Sqrt":
          handleSqrtNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="^2" onClick={handleElevate2Numbers} />
          <Button label="%" onClick={handlePorcentNumbers} />
          <Button label="Sqrt" onClick={handleSqrtNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="-" onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="/" onClick={handleDivNumbers} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="=" onClick={HandleEquals} />
          <Button label="," onClick={() => handleAddNumber(",")} />
          <Button label="*" onClick={handleMultNumbers} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
