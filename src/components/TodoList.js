import List from "@material-ui/core/List";

import TodoItem from './TodoItem'

function TodoList({ list, onDeleteItem, onCheck, sort = false }) {
  return (
    <List>
      {list.map((item, i) => (
        <TodoItem
          key={item.id}
          checked={item.checked}
          onClick={() => onCheck(i, !item.checked)}
          onDelete={() => onDeleteItem(i)}
        >
          {item.text}
        </TodoItem>
      ))}
    </List>
  );
}

export default TodoList;
