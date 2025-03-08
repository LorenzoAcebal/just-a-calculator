/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ActionDispatch,
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";

const CalculatorContext = createContext([""]);

const CalculatorDispatchContext = createContext({} as ActionDispatch<any>);

const reducer = (state: string[], action: any) => {
  switch (action.type) {
    case "addNumber":
      return [...state, action.payload];
    case "joinNumbers":
      return [state.join("")];
    case "deleteNumber":
      return state.length > 0
        ? state[0] === "" && state.length === 1
          ? [""]
          : state.slice(0, -1)
        : [""];
    case "addition": {
      let result: number = 0;
      state.map((stringNumber) => {
        result = result + +stringNumber;
        return stringNumber;
      });
      return [result.toString];
    }

    // case "add":
    //   return { ...state, [action.payload.id]: action.payload };
    // case "delete": {
    //   const newMesures = { ...state };
    //   delete newMesures[action.payload];
    //   return newMesures;
    // }
    // case "editField": {
    //   return {
    //     ...state,
    //     [action.payload.id]: {
    //       ...state[action.payload.id],
    //       [action.payload.field]: action.payload.value,
    //     },
    //   };
    // }
    // case "reset":
    //   return {};
    default:
      return [""];
  }
};
interface Props {
  children: ReactNode;
}

export const CalculatorProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, [""]);
  return (
    <CalculatorContext.Provider value={state}>
      <CalculatorDispatchContext.Provider value={dispatch}>
        {children}
      </CalculatorDispatchContext.Provider>
    </CalculatorContext.Provider>
  );
};

export const useCalculatorContext = () => {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error(
      "CalculatorContext must be used within a Calculator Provider"
    );
  }
  return context;
};

export const useCalculatorContextDispatch = () => {
  return useContext(CalculatorDispatchContext);
};
