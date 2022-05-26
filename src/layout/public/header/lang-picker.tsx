import React, { useContext, useState } from 'react'
import styled from  'styled-components'
import LanguageIcon from '@mui/icons-material/Language'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { LangContext } from '../../../app/context/lang'
import { Lang } from '../../../app/context/lang/hook'
import Menu from '../../../components/ui/menu'

interface IProps {}

const options = [
  {
    label: Lang.EN.toUpperCase(),
    value: Lang.EN,
  },
  {
    label: Lang.FR.toUpperCase(),
    value: Lang.FR,
  },
]

function LangPicker(props: IProps) {
  const { lang, setLang } = useContext(LangContext)
  const [open, setOpen] = useState<boolean>(false)

  function selectLang(value: Lang) {
    setLang(value)
    setOpen(false)
  }

  return (
    <SContainer open={open}>
      <div onClick={() => setOpen(!open)}>
        <LanguageIcon />
        <KeyboardArrowDownIcon />
      </div>
      {open && <Menu options={options} setValue={selectLang} value={lang} />}
    </SContainer>
  )
}

export default LangPicker

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
