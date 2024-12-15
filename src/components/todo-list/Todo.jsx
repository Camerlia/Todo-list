import { useReducer } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
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
    <div className="max-w-5xl mx-auto bg-orange-900/80 p-4 rounded-md">
      <h1 className="text-3xl md:text-4xl font-extrabold py-3 text-center">
        To-Do List
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-center py-4">
        <div className="flex flex-col">
          <label className="text-sm md:text-base pb-2">Name</label>
          <input
            type="text"
            placeholder="Input name"
            className="rounded-sm border-2 w-full md:w-64"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm md:text-base pb-2">Description</label>
          <input
            type="text"
            placeholder="Input description"
            className="rounded-sm border-2 w-full md:w-64"
          />
        </div>
        <div className="flex justify-start items-start">
          <button
            type="button"
            className="md:p-4 p-1 w-full md:max-w-lg m-auto rounded-sm border bg-orange-700 hover:bg-orange-500 border-white"
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
      <div className=" bg-orange-500/90 p-4 flex flex-col md:flex-row md:justify-between md:items-center mt-5 gap-6" >
        <div className="flex flex-col gap-4 ">
          <h3 className="text-lg font-semibold md:text-3xl">Task</h3>
          <p className="text-base font-extralight">Description</p>
        </div>
        <div className="flex gap-2 md:gap-4 ">
          <MdDeleteForever className="text-lg md:text-3xl hover:text-red-800" />
          <FaRegCheckCircle className="text-lg md:text-3xl hover:text-orange-200" />
        </div>
      </div>
    </div>
  );
};

export default Todo;
