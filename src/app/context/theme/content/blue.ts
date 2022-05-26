import { createTheme, Theme } from "@mui/material"

export const blueTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#140691",
      light: "#080240",
    },
    secondary: {
      main: "#51b5fc",
    },
    text: {
      primary: "#ffffff",
    },
    error: {
      main: "#ff0000",
    },
  }
})