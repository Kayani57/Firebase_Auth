
import { Button } from '@mui/material';

interface AddProps {
  handleAdd: () => void;
}

export function Add({ handleAdd }: AddProps) {
  return (
    <Button
      variant="contained"
      color="primary" 
      onClick={handleAdd}
      sx={{
        margin: 2, 
        width: '100%', 
        '@media (min-width:600px)': {
          width: 'auto',
        },
        fontWeight: 'bold',
      }}
    >
      Add
    </Button>
  );
}
