import "./App.css";
import Keyboard from "./components/AlphaNumericCalculator/Keyboard";
import { Screen } from "./components/AlphaNumericCalculator/Screen";
import { Card } from "./components/Card";
import { CalculatorProvider } from "./context/calculator.context";

function App() {
  const numArray = [];
  for (let index = 1; index < 10; index++) {
    numArray[index] = `${index}`;
  }
  const numArrayCopy = numArray.map((x) => x);
  const formatedNumArray = numArrayCopy.reverse();
  formatedNumArray.push("+", "0", "-", "=", "c", "<");
  return (
    <>
      <h1>Just a calculator</h1>
      <Card customClass="calculatorbg">
        <CalculatorProvider>
          <Screen />
          <Keyboard array={formatedNumArray} />
        </CalculatorProvider>
      </Card>
    </>
  );
}

export default App;
