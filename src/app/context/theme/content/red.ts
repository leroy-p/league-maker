import { createTheme, Theme } from "@mui/material"

export const redTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#ab2020",
      light: "#590404",
    },
    secondary: {
      main: "#f5dcdc",
    },
    text: {
      primary: "#ffffff",
    },
    error: {
      main: "#ff0000",
    },  
  }
})