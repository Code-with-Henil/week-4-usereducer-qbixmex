import { FC, Fragment, useContext } from 'react';
import { List, Paper, Divider } from '@mui/material';
import { TodosContext } from '../contexts/todos.provider';
import { TodoItem } from '.';

type Props = {
  name?: string;
};

const Todos: FC<Props> = () => {

  const { state: { todos } } = useContext(TodosContext);

  return (
    <Paper>
      <List>

        { todos.map((todo, index) => {
          return (
            <Fragment key={todo.id}>
              <TodoItem todo={todo} />
              { index !== (todos.length - 1) && <Divider  /> }
            </Fragment>
          );
        })}

      </List>
    </Paper>
  );

};

export default Todos;
