import React from 'react';
import { TextField, Box } from '@mui/material';

interface InputProps {
  todo: { title: string; description: string };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ todo, handleChange }: InputProps) {
  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', sm: 'row' }} 
      justifyContent="space-between" 
      width="100%"
    >
      <TextField
        name="title"
        placeholder="Title..."
        variant="outlined"
        onChange={handleChange}
        value={todo.title}
        sx={{
          margin: 1, 
          flexGrow: 1,
        }}
      />
      <TextField
        name="description"
        placeholder="Description..."
        variant="outlined"
        onChange={handleChange}
        value={todo.description}
        sx={{
          margin: 1,
          flexGrow: 1, 
        }}
      />
    </Box>
  );
}
