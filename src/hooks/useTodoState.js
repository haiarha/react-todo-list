import { useState } from "react";

const createTodoItem = (text, id, checked = false) => ({
  id,
  text,
  checked,
});

/**
 * @param {*} initialState
 * @returns [list, add, remove, setChecked, setList]
 */
function useTodoState(initialState) {
  const [list, setList] = useState(initialState);

  const add = (text) => {
    const newId =
      list.reduce((res, item) => (item.id > res ? item.id : res), 0) + 1;

    setList([...list, createTodoItem(text, newId)]);
  };

  const remove = (index) => setList(list.filter((_, i) => i !== index));

  const setChecked = (index, checked) => {
    const newList = [...list];

    const item = newList[index];

    if (item === undefined) return;

    newList.splice(index, 1, {
      ...item,
      checked,
    });

    setList(newList);
  };

  return [list, add, remove, setChecked, setList];
}

export default useTodoState;
