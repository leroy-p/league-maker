import { createTheme, Theme } from "@mui/material"

export const pinkTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#e00bc0",
      light: "#ffb0f3",
    },
    secondary: {
      main: "#47033d",
    },
    text: {
      primary: "#000000",
    },
    error: {
      main: "#ff0000",
    },  
  }
})