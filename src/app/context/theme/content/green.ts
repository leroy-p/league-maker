import { createTheme, Theme } from "@mui/material"

export const greenTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#0b6623",
      light: "#023811",
    },
    secondary: {
      main: "#20ab45",
    },
    text: {
      primary: "#ffffff",
    },
    error: {
      main: "#ff0000",
    },
  }
})