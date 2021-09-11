import { useEffect } from "react";
import useTodoState from "./hooks/useTodoState";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoItemContext from "./components/TodoItem/context";

import "./App.css";


const LS_TODO_KEY = "todo-list";

let initialTodoState = [];
if (window.localStorage !== undefined) {
  initialTodoState = JSON.parse(localStorage.getItem(LS_TODO_KEY) || "[]");
}

function App() {
  const [list, add, remove, setChecked] = useTodoState(initialTodoState);

  useEffect(() => {
    if (list !== initialTodoState) {
      localStorage.setItem(LS_TODO_KEY, JSON.stringify(list));
    }
  }, [list]);

  return (
    <div className="App">
      <Header text={"todo list"} />

      <main>
        <div className="container">
          <TodoForm onSave={add} />

          <TodoItemContext.Provider value={{ remove, setChecked }}>
            <TodoList list={list} />
          </TodoItemContext.Provider>
        </div>
      </main>
    </div>
  );
}

export default App;
