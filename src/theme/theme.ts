import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Vibrant blue
    },
    secondary: {
      main: '#ff9800', // Complementary orange
    },
    background: {
      default: '#f5f5f5', // Light gray
      paper: '#ffffff', // White for paper elements
    },
    text: {
      primary: '#212121', // Dark gray for primary text
      secondary: '#757575', // Medium gray for secondary text
    },
    divider: '#e0e0e0', // Light gray for dividers
  },
});

export default theme;
