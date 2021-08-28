import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";
import useTodoState from "./hooks/useTodoState";
import { useEffect } from "react";

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

          <TodoList list={list} onDeleteItem={remove} onCheck={setChecked} />
        </div>
      </main>
    </div>
  );
}

export default App;
