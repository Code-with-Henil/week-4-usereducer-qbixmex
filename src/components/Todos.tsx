import { FC } from 'react';
import { List, ListItem, IconButton, ListItemText, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import UncheckedBoxIcon from '@mui/icons-material/CheckBoxOutlineBlank';

type Props = {
  name?: string;
};

const Todos: FC<Props> = () => {

  return (
    <Paper>
      <List>
        <ListItem>
          <ListItemText sx={{ textDecoration: 'line-through' }}>Go to the Shopping Mall</ListItemText>
          <IconButton>
            <CheckBoxIcon color="success" />
          </IconButton>
          <IconButton>
            <EditIcon color="warning" fontSize="medium" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="error" fontSize="medium" />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemText sx={{ textDecoration: 'line-through' }}>Go to the Gym</ListItemText>
          <IconButton>
            <CheckBoxIcon color="success" />
          </IconButton>
          <IconButton>
            <EditIcon color="warning" fontSize="medium" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="error" fontSize="medium" />
          </IconButton>
        </ListItem>
        <ListItem>
          <ListItemText>Go to the School</ListItemText>
          <IconButton>
            <UncheckedBoxIcon color="info" />
          </IconButton>
          <IconButton>
            <EditIcon color="warning" fontSize="medium" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="error" fontSize="medium" />
          </IconButton>
        </ListItem>
      </List>
    </Paper>
  );

};

export default Todos;
