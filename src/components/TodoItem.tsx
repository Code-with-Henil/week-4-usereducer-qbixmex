import { FC } from 'react';
import { Todo } from '../interfaces';
import { ListItem, IconButton, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UncheckedBoxIcon from '@mui/icons-material/CheckBoxOutlineBlank';

type Props = {
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {

  return (
    <ListItem>
      <ListItemText sx={{
        textDecoration: todo.isComplete ? 'line-through' : 'none'
      }}>{ todo.task }</ListItemText>
      <IconButton>
      {
        todo.isComplete
          ? <CheckBoxIcon color="success" />
          : <UncheckedBoxIcon color="info" />
      }
      </IconButton>
      <IconButton>
        <EditIcon color="warning" fontSize="medium" />
      </IconButton>
      <IconButton>
        <DeleteIcon color="error" fontSize="medium" />
      </IconButton>
    </ListItem>
  );

};

export default TodoItem;
