import { FC, useContext } from 'react';
import { Todo } from '../interfaces';
import { ListItem, IconButton, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UncheckedBoxIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { TodosContext } from '../contexts/todos.provider';

type Props = {
  todo: Todo;
};

const TodoItem: FC<Props> = ({ todo }) => {

  const { dispatch } = useContext(TodosContext);

  const handleComplete = () => {
    dispatch({
      type: 'TOGGLE-COMPLETE',
      payload: { id: todo.id }
    });
  };

  const handleEdit = () => {
    dispatch({
      type: 'EDIT',
      payload: { todo: todo },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'DELETE',
      payload: { id: todo.id }
    });
  };

  return (
    <ListItem>
      <ListItemText sx={{
        textDecoration: todo.isComplete ? 'line-through' : 'none'
      }}>{ todo.task }</ListItemText>

      {/* TOGGLE COMPLETE */}
      <IconButton onClick={handleComplete}>
      {
        todo.isComplete
          ? <CheckBoxIcon color="success" />
          : <UncheckedBoxIcon color="info" />
      }
      </IconButton>

      {/* EDIT TODO */}
      <IconButton onClick={handleEdit}>
        <EditIcon color="warning" fontSize="medium" />
      </IconButton>

      {/* DELETE TODO */}
      <IconButton onClick={handleDelete}>
        <DeleteIcon color="error" fontSize="medium" />
      </IconButton>
    </ListItem>
  );

};

export default TodoItem;
