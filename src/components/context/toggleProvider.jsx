/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const initialVal = {
    stateVal: false,
    isCompleted: false,
  };

  const [state, dispatch] = useReducer(handleChange, initialVal);

  function handleChange(state, action) {
    switch (action.type) {
      case "TODO_SWITCH":
        return { ...state, stateVal: !state.stateVal };
      case "TOGGLE_COMPLETED":
        return { ...state, isCompleted: !state.isCompleted };
      default:
        return state;
    }
  }

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export {TodoContext};