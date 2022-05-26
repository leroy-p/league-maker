import React, { useContext, useState } from 'react'
import styled from  'styled-components'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { ThemeContext } from '../../../app/context/theme'
import { ThemeMode } from '../../../app/context/theme/hook'
import { 
  lightTheme,
  darkTheme,
  redTheme,
  greenTheme,
  blueTheme,
  pinkTheme,
} from "../../../app/context/theme/content/"
import Menu from '../../../components/ui/menu'

interface IProps {}

const options = [
  {
    color: lightTheme.palette.primary,
    value: ThemeMode.LIGHT,
  },
  {
    color: darkTheme.palette.primary,
    value: ThemeMode.DARK,
  },
  {
    color: redTheme.palette.primary,
    value: ThemeMode.RED,
  },
  {
    color: greenTheme.palette.primary,
    value: ThemeMode.GREEN,
  },
  {
    color: blueTheme.palette.primary,
    value: ThemeMode.BLUE,
  },
  {
    color: pinkTheme.palette.primary,
    value: ThemeMode.PINK,
  },
]

function ThemePicker(props: IProps) {
  const { mode, setMode } = useContext(ThemeContext)
  const [open, setOpen] = useState<boolean>(false)

  function selectTheme(value: ThemeMode) {
    setMode(value)
    setOpen(false)
  }

  return (
    <SContainer open={open}>
      <div onClick={() => setOpen(!open)}>
        <ColorLensIcon />
        <KeyboardArrowDownIcon />
      </div>
      {open && <Menu options={options} setValue={selectTheme} value={mode} />}
    </SContainer>
  )
}

export default ThemePicker

const SContainer = styled.div<{ open: boolean }>`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  height: 40px;
  justify-content: center;
  position: relative;
  overflow: visible;
  width: 72px;

  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;

    & > svg {
      fill: ${({ theme }) => theme.palette.text.primary};
    }

    & > svg:nth-child(2) {
      transform: ${({ open }) => (open ? 'rotate(180deg)' :'none')};
      transition: transform 200ms ease-in-out;
    }

    :hover {
      opacity: 0.7;
    }
  }
`
