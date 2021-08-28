import { useContext } from "react";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import DeleteIcon from "@material-ui/icons/Delete";

import Context from "./context";

function TodoItem(props) {
  const {
    children,

    index,
    checked,

    ...rest
  } = props;

  const { remove, setChecked } = useContext(Context);

  return (
    <ListItem
      {...rest}
      className="TodoItem"
      button
      onClick={() => setChecked(index, !checked)}
    >
      <ListItemIcon>
        <Checkbox checked={checked} disableRipple />
      </ListItemIcon>

      <ListItemText>{children}</ListItemText>

      <ListItemSecondaryAction>
        <IconButton onClick={() => remove(index)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
