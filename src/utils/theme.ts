import { ThemeOptions } from '@mui/material';

export default {
  palette: {
    primary: {
      main: '#21aa58',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontSize: 16,
        },
      },
    },
  },
} as ThemeOptions;
