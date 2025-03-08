import { useCalculatorContext } from "../../../context/calculator.context";

export const Screen = () => {
  const initialState = useCalculatorContext();
  // const [numbers, setNumbers] = useState(initialState);
  // useEffect(() => {
  //   setNumbers(initialState);
  // }, [initialState]);

  console.log("in", initialState);
  return (
    <div className="screen">
      <p>{initialState.length > 1 ? initialState.join("") : "0"}</p>
    </div>
  );
};
