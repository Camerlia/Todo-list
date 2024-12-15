import { useReducer } from "react";

const Todo = () => {
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

  const handleTodoClick = () => {
    dispatch({ type: "TODO_SWITCH" });
  };

  const handleCompletedClick = () => {
    dispatch({ type: "TOGGLE_COMPLETED" });
  };

  return (
    <div className="max-w-5xl m-auto bg-orange-900/80 p-10 rounded-md">
      <h1 className="font-extrabold text-4xl py-3">To-Do List</h1>
      <div className="flex flex-row gap-4 items-center justify-center py-4">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            type="text"
            placeholder="input name"
            className="rounded-sm border-2"
          />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <input
            type="text"
            placeholder="input description"
            className="rounded-sm border-2"
          />
        </div>
        <div>
          <button
            type="button"
            className="p-4 rounded-sm border bg-orange-700 hover:bg-orange-500 border-white"
          >
            Add
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <button
          className={`p-1 rounded-sm border border-black ${
            state.stateVal ? "bg-orange-700" : "bg-orange-500"
          }`}
          onClick={handleTodoClick}
        >
          Todo
        </button>
        <button
          className={`p-1 rounded-sm border border-black ${
            state.isCompleted ? "bg-orange-700" : "bg-orange-500"
          }`}
          onClick={handleCompletedClick}
        >
          Completed
        </button>
      </div>
      <div className="flex flex-col gap-4 py-4">
        <h3>Task</h3>
        <p>Description</p>
      </div>
    </div>
  );
};

export default Todo;
