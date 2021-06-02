import { useState } from "react";

let iterationId = 1;

const createTodoItem = (text) => ({
  id: iterationId++,
  text,
  checked: false,
});

function TodoState(initialState, onChange = () => undefined) {
  initialState.forEach((item) => {
    if (item.id >= iterationId) iterationId = item.id + 1;
  });

  const [list, _setList] = useState(initialState);

  const setList = (data) => {
    _setList(data);

    onChange(data);
  };

  return {
    list,

    add(text) {
      const todoItem = createTodoItem(text);

      setList([...list, todoItem]);
    },

    delete(index) {
      setList(list.filter((_, i) => i !== index));
    },

    setChecked(index, checked) {
      const newList = [...list];

      const item = newList[index];

      if (item === undefined) return;

      newList.splice(index, 1, {
        ...item,
        checked,
      });

      setList(newList);
    },
  };
}

export default TodoState;
