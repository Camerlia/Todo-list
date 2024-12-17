import "./App.css";
import { TodoProvider } from "./components/context/toggleProvider";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="bg-orange-950 h-screen text-white py-14 flex flex-col justify-center">
      <TodoProvider>
       <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
