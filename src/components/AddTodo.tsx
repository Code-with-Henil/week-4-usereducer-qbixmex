import { Button, Paper, Stack, TextField } from "@mui/material";
import { FormEvent, useRef } from "react";

const AddTodo = () => {

  const inputRef = useRef<HTMLInputElement|null>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    //* Should dispatch({ type: 'add' });
    console.log("TODO:", inputRef.current?.value);

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
          />
          <Button type="submit" variant="outlined">Create</Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default AddTodo;