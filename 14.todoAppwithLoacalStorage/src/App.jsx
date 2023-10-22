import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add todos
  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  // Function to update todos
  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((val) => (val.id === id ? todo : val))
    );
  };

  // Function to delete todos
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((val) => val.id !== id));
  };

  // Function to check whether a todo is completed or not
  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((val) =>
        val.id === id ? { ...val, completed: !val.completed } : val
      )
    );
  };

  // UseEffect function to load todos which already have on the browser local storage
  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem("todos"));
    if(getTodos && getTodos.length>0 ){
      setTodos(getTodos);
    }
  }, []);

  // UseEffect function to set todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-inner bg-slate-700 rounded-lg px-4 py-3 text-slate-200 tracking-wider">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Todo List
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
