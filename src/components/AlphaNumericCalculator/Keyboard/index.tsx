import { useCalculatorContextDispatch } from "../../../context/calculator.context";
import KeyboardKey from "./KeyboardKey";

interface Props {
  array: string[];
}

const Keyboard = ({ array }: Props) => {
  const dispatch = useCalculatorContextDispatch();
  const onClickHandler = (keyPressed: string) => {
    switch (keyPressed) {
      case "<":
        dispatch({
          type: "deleteNumber",
        });
        break;

      default:
        dispatch({
          type: "addNumber",
          payload: keyPressed,
        });
    }

    console.log(keyPressed);
  };
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {array?.map((key: string) => (
        <KeyboardKey key={key} nameKey={key} onClickHandler={onClickHandler} />
      ))}
    </div>
  );
};

export default Keyboard;
