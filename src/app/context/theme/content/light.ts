import { createTheme, Theme } from "@mui/material"

export const lightTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "#dddddd",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
    },
    error: {
      main: "#ff0000",
    },
  }
})