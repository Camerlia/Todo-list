import { createContext, useReducer } from "react";

const itemsContext = createContext();

const initialListVal = {
  allTodo: [],
  newTitle: "",
  newDescription: "",
};

function handleChange(state, action) {
  switch (action.type) {
    case "ADD_TITLE":
      return {
        ...state,
        newTitle: action.payload,
      };
    case "ADD_DESCRIPTION":
      return {
        ...state,
        newDescription: action.payload,
      };
    case "ADD_TODO":
      return {
        allTodo: [
          ...state.allTodo,
          { title: state.newTitle, newDescription: state.newDescription },
        ],
        newTitle: "",
        newDescription: "",
      };
    default:
      return state;
  }
}
export const ItemsContext = itemsContext;
export default function ItemProvider({ children }) {
  const [state, dispatch] = useReducer(handleChange, initialListVal);

  <itemsContext.Provider value={{ state, dispatch }}>
    {children}
  </itemsContext.Provider>;
}
