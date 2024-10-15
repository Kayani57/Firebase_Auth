import { useState } from 'react';
import { Form } from './Form';
import { List1 } from './List';


export interface Todo {
  title: string;
  description: string;
  status: boolean;
}

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleStatus = (index: number) => {
    const updatedTodos = todos.map((t, i) =>
      i === index ? { ...t, status: !t.status } : t
    );
    setTodos(updatedTodos);
  };

  const handleDelete = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
     
      
      <Form addTodo={addTodo} />
      <List1 todos={todos} toggleStatus={toggleStatus} handleDelete={handleDelete} />
    </div>
  );
}

export default Todo;
