import { createTheme, Theme } from "@mui/material"
import { useState } from 'react'
import { 
  lightTheme,
  darkTheme,
  redTheme,
  greenTheme,
  blueTheme,
  pinkTheme,
} from "./content/"

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  RED = 'red',
  GREEN = 'green',
  BLUE = 'blue',
  PINK = 'pink',
}

export interface IThemeContextData {
  mode: ThemeMode
  theme: Theme
  setMode: (value: ThemeMode) => void
}

export const defaultTheme: Theme = { ... lightTheme}

const themes = {
  [ThemeMode.LIGHT]: lightTheme,
  [ThemeMode.DARK]: darkTheme,
  [ThemeMode.RED]: redTheme,
  [ThemeMode.GREEN]: greenTheme,
  [ThemeMode.BLUE]: blueTheme,
  [ThemeMode.PINK]: pinkTheme,
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