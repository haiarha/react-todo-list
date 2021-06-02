import { useState } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

import "./App.css";

function App() {
  const [list, setList] = useState([]);

  const [listDone, setListDone] = useState([]);

  const moveToDone = (i) => {
    const newList = [...list];

    const moveItem = newList[i];

    if (!moveItem) return;

    newList.splice(i, 1);
    setList(newList);

    setListDone([...listDone, moveItem]);
  };

  return (
    <div className="App">
      <Header text={"todo list"} />

      <main>
        <div className="container">
          <TodoForm
            onSave={(v) => {
              setList([...list, v]);
            }}
          />

          <h4>TODO:</h4>
          <ol>
            {list.map((text, i) => (
              <li
                onClick={() => {
                  moveToDone(i);
                }}
              >
                {text}
              </li>
            ))}
          </ol>

          <h4>Done:</h4>
          <ol>
            {listDone.map((text) => (
              <li style={{ textDecoration: "line-through" }}>{text}</li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}

export default App;
