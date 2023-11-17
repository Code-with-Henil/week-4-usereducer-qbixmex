import { Button, Paper, Stack, TextField } from "@mui/material";
import { FormEvent, useContext, useRef } from "react";
import { TodosContext } from "../contexts/todos.provider";

const AddTodo = () => {

  const { dispatch } = useContext(TodosContext);

  const inputRef = useRef<HTMLInputElement|null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch({
      type: 'create',
      payload: {
        task: inputRef.current?.value as string,
      },
    });

    //* Clear Input
    inputRef.current!.value = '';
  };

  return (
    <Paper sx={{ mb: 3, p: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2}>
          <TextField
            label="Todo"
            variant="outlined"
            fullWidth
            inputRef={inputRef}
            autoComplete="off"
            defaultValue="Go to the store"
          />
          <Button type="submit" variant="outlined">Create</Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default AddTodo;