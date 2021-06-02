import TodoState from "./state/todo";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

const LS_TODO_KEY = "todo-list";

let initialTodoState = []
if (window.localStorage !== undefined) {
  initialTodoState = JSON.parse(localStorage.getItem(LS_TODO_KEY) || "[]");
}

function App() {
  const todo = TodoState(initialTodoState, (list) => {
    localStorage.setItem(LS_TODO_KEY, JSON.stringify(list))
  });

  return (
    <div className="App">
      <Header text={"todo list"} />

      <main>
        <div className="container">
          <TodoForm onSave={todo.add} />

          <TodoList
            list={todo.list}
            onDeleteItem={todo.delete}
            onCheck={todo.setChecked}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
