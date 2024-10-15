
import { Todo } from './Todo';
import { List, ListItem,Button, Box, Typography } from '@mui/material';

interface ListProps {
  todos: Todo[];
  toggleStatus: (index: number) => void;
  handleDelete: (index: number) => void;
}

export function List1({ todos, toggleStatus, handleDelete }: ListProps) {
  return (
    <List sx={{ marginTop: 2, width: '100%' }}>
      {todos.map((t, index) => (
        <ListItem 
          key={index} 
          sx={{
            justifyContent: 'space-between', 
            border: '1px solid rgba(0, 0, 0, 0.12)', 
            borderRadius: '8px', 
            padding: 2, 
            backgroundColor: 'white', 
            marginBottom: 2,
          }}
        >
          <Box sx={{ flexGrow: 1, marginRight: 2 }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
              Title:
            </Typography>
            <Typography variant="body1" component="h5">
              {t.title}
            </Typography>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>
              Description:
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              {t.description}
            </Typography>
            <Typography>
              <span style={{ color: 'blue' }}>Status: </span>
              {t.status ? (
                <span style={{ color: 'green' }}>Done</span>
              ) : (
                <span style={{ color: 'red' }}>Not Done</span>
              )}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', sm: { flexDirection: 'row' } }}>
            <Button
              variant="contained"
              color={t.status ? 'secondary' : 'primary'}
              sx={{ margin: 1 }}
              onClick={() => toggleStatus(index)}
            >
              {t.status ? "Mark Undone" : "Mark Done"}
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ margin: 1 }}
              onClick={() => handleDelete(index)}
            >
              Delete
            </Button>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
