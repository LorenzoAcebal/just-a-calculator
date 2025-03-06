/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext, useReducer } from "react";

const CalculatorContext = createContext(["0"]);

const CalculatorDispatchContext = createContext({});

const reducer = (state: string[], action: any) => {
  switch (action.type) {
    case "setInitialState":
      return [...state, "0"];
    case "setRoleSelected":
      return ["0"];
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
      return ["0"];
  }
};
interface Props {
  children: ReactNode;
}

export const CalculatorProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, []);
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
