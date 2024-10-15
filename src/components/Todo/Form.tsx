import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import { Add } from "./Add"; 
import { Todo } from "./Todo";

interface FormProps {
  addTodo: (todo: Todo) => void;
}

export function Form({ addTodo }: FormProps) {
  const [todo, setTodo] = useState<{ title: string; description: string }>({
    title: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!(todo.title === "" && todo.description === "")) {
      addTodo({ ...todo, status: false });
      setTodo({ title: "", description: "" });
    }
  };

  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: "column", sm: "row" }} 
      justifyContent="center" 
      alignItems="center" 
      sx={{ padding: 2, margin: 2 }}
    >
      <TextField
        name="title"
        label="Title"
        variant="outlined"
        value={todo.title}
        onChange={handleChange}
        sx={{ margin: 1 }}
        /> 
      <TextField
        name="description"
        label="Description"
        variant="outlined"
        value={todo.description}
        onChange={handleChange}
        sx={{ margin: 1 }} 
      />
      <Add handleAdd={handleAdd} />
    </Box>
  );
}
