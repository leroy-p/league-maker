import React from 'react'
import styled from  'styled-components'
import CloseIcon from '@mui/icons-material/Close'

interface IProps {
  children: JSX.Element
  close: () => void
}

function Dialog({ children, close }: IProps) {
  return (
    <SContainer onClick={close}>
      {children}
      <button onClick={close}>
        <CloseIcon />
      </button>
    </SContainer>
  )
}

export default Dialog

const SContainer = styled.div`
  align-items: center;
  background-color: #444444aa;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100vw;

  & > button {
    height: 32px;
    position: absolute;
    right: 16px;
    top: 16px;
    width: 32px;

    & > svg {
      fill: ${({ theme }) => theme.palette.text.primary};
      height: 100%;
      width: 100%;
    }
  }
`