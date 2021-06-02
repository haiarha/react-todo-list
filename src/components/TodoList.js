import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import DeleteIcon from "@material-ui/icons/Delete";

function TodoList({ list, onDeleteItem, onCheck, sort = false }) {
  return (
    <List>
      {list.map((item, i) => (
        <ListItem key={item.id}>
          <ListItemIcon>
            <Checkbox
              checked={item.checked}
              onChange={(e) => {
                onCheck(i, e.target.checked);
              }}
            />
          </ListItemIcon>

          <ListItemText>{item.text}</ListItemText>

          <ListItemSecondaryAction>
            <IconButton
              onClick={(e) => {
                onDeleteItem(i);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
