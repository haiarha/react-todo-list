import List from "@material-ui/core/List";

import TodoItem from './TodoItem'

function TodoList({ list, sort = false }) {
  return (
    <List>
      {list.map((item, i) => (
        <TodoItem
          key={item.id}
          index={i}
          checked={item.checked}
        >
          {item.text}
        </TodoItem>
      ))}
    </List>
  );
}

export default TodoList;
