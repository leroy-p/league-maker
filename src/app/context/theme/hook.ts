import { createTheme, Theme } from "@mui/material"
import { useState } from 'react'

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface IThemeContextData {
  mode: ThemeMode
  theme: Theme
  setMode: (value: ThemeMode) => void
}

export const defaultTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
    error: {
      main: "#ff0000",
    },  
  }
})
const lightTheme: Theme = {
  ...defaultTheme,
}
const darkTheme: Theme = createTheme({
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: "#000000",
    },  
    secondary: {
      main: "#ffffff",
    },
  }
})

const themes = {
  [ThemeMode.LIGHT]: lightTheme,
  [ThemeMode.DARK]: darkTheme,
}

export function useThemeContext(defaultMode: ThemeMode): IThemeContextData {
  const [currentMode, setCurrentMode] = useState<ThemeMode>(defaultMode)
  const [theme, setTheme] = useState<Theme>(themes[defaultMode] || lightTheme)

  function setMode(mode: ThemeMode) {
    setCurrentMode(themes[mode] ? mode : currentMode)
    setTheme(themes[mode] || theme)
  }

  return { theme, mode: currentMode, setMode }
}