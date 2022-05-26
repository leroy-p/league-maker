import { createTheme, Theme } from "@mui/material"

export const darkTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
      light: "#222222"
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
    },
    error: {
      main: "#ff0000",
    },
  }
})