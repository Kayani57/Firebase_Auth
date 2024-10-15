
import { Button } from '@mui/material';

interface AddProps {
  handleAdd: () => void;
}

export function Add({ handleAdd }: AddProps) {
  return (
    <Button
      variant="contained"
      color="primary" // You can change this to "secondary" or other colors as needed
      onClick={handleAdd}
      sx={{
        margin: 2, // Apply margin around the button
        width: '100%', // Full width by default
        '@media (min-width:600px)': {
          width: 'auto', // Auto width on larger screens
        },
        fontWeight: 'bold',
      }}
    >
      Add
    </Button>
  );
}
