import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import DeleteIcon from "@material-ui/icons/Delete";

function TodoItem(props) {
  const {
    children,

    checked,
    onClick,
    onDelete,
  } = props;

  return (
    <ListItem className="TodoItem" button onClick={onClick}>
      <ListItemIcon>
        <Checkbox checked={checked} disableRipple />
      </ListItemIcon>

      <ListItemText>{children}</ListItemText>

      <ListItemSecondaryAction>
        <IconButton onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
