import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { TodoContext } from "../context/toggleProvider";

const Todo = () => {
  const { state: todoState, dispatch: todoDispatch } = useContext(TodoContext);
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleTodoClick = () => {
    todoDispatch({ type: "TODO_SWITCH" });
  };
  const handleCompletedClick = () => {
    todoDispatch({ type: "TOGGLE_COMPLETED" });
  };

  const handleAddTodo = () => {
    let newTodoItem = {
      title: title,
      description: description,
    };
    let updatedItem = [...todos];
    updatedItem.push(newTodoItem);
    setTodos(updatedItem);
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
            className="rounded-sm border-2 w-full md:w-64 text-orange-600"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm md:text-base pb-2">Description</label>
          <input
            type="text"
            placeholder="Input description"
            className="rounded-sm border-2 w-full md:w-64 text-orange-600"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-start items-start">
          <button
            onClick={handleAddTodo}
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
            todoState.stateVal ? "bg-orange-700" : "bg-orange-500"
          }`}
          onClick={handleTodoClick}
        >
          Todo
        </button>
        <button
          className={`p-1 rounded-sm border border-black ${
            todoState.isCompleted ? "bg-orange-700" : "bg-orange-500"
          }`}
          onClick={handleCompletedClick}
        >
          Completed
        </button>
      </div>
      {todos.map((item, index) => {
        return (
          <div
            className=" bg-orange-500/90 p-4 flex flex-col md:flex-row md:justify-between md:items-center mt-5 gap-6"
            key={index}
          >
            <div className="flex flex-col gap-4 ">
              <h3 className="text-lg font-semibold md:text-3xl">
                {item.title}
              </h3>
              <p className="text-base font-extralight">{item.description}</p>
            </div>
            <div className="flex gap-2 md:gap-4 ">
              <MdDeleteForever className="text-lg md:text-3xl hover:text-red-800" />
              <FaRegCheckCircle className="text-lg md:text-3xl hover:text-orange-200" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
