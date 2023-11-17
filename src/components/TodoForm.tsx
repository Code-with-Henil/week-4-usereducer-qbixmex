import { Button, Paper, Stack, TextField } from "@mui/material";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { TodosContext } from "../contexts/todos.provider";

const TodoForm = () => {

  const { dispatch, state: { todo } } = useContext(TodosContext);

  const [ task, setTask ] = useState('');

  useEffect(() => {
    if (todo !== null) {
      setTask(todo.task);
    }
  }, [todo]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    //? Validation
    if (task === '') return;

    //? NEW TODO
    if (todo === null) {
      dispatch({
        type: 'CREATE',
        payload: {
          task: task,
        },
      });
    }

    //? UPDATE TODO
    if (todo !== null) {
      dispatch({
        type: 'UPDATE',
        payload: {
          todo: { ...todo, task },
        },
      });
    }

    //? Clear Input
    setTask('');
  };

  return (
    <Paper sx={{ mb: 3, p: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Todo"
            variant="outlined"
            fullWidth
            autoComplete="off"
            value={ task }
            onChange={handleInputChange}
          />
          <Button type="submit" variant="outlined">
            { !todo ? 'Create' : 'Update' }
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default TodoForm;