// styles/theme.ts

import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: '#19192B',
      white: '#ffffff',
    },
    primary: {
      light: '#B3E5FC',
      main: '#12ae6d',
      dark: '#12ae6d',
      contrastText: '#212121',
    },
    secondary: {
      main: '#008000', // omitting light and dark will calculate from main
      contrastText: '#ffffff',
    },
    grey: {
      '500': '#bcbcbc',
      '700': '#79797a',
    },
    info: {
      main: '#1bb2f1',
    },
    success: {
      main: '#00d589',
    },
    error: {
      main: '#fa0000',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
});

export default theme;
