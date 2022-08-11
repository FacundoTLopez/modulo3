import React, { createContext, useContext, useReducer } from "react";
import { counterInitialState, counterReducer } from "../Reducers/countReducer";

const CountContext = createContext();
export const useCountContext = () => useContext(CountContext);

const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};

export { CountContextProvider };
export default CountContext;
