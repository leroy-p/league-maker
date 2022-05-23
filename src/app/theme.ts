import { createTheme } from "@mui/material"

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: ``,
    }},
    palette: {
      primary: {
        main: '#05056b',
      },
      secondary: {
        main: '#00b9ff',
      },
      success: {
        main: '#6cc867',
      },
      warning: {
        main: '#ff7a59',
      },
      error: {
        main: '#e95847',
        dark: '#ff005a',
      },
      info: {
        main: '#c0c0da',
      },
    },
});

export default theme;
