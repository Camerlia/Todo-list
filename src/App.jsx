import "./App.css";
import { TodoProvider } from "./components/context/toggleProvider";
import Todo from "./components/todo-list/todo";

function App() {
  return (
    <div className="bg-orange-950 h-screen text-white py-14 flex flex-col justify-center">
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  );
}

export default App;
