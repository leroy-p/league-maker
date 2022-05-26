import React from 'react'
import styled from 'styled-components'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Trans } from '@lingui/react'

interface IProps {
  round: number
  setRound: (value: number) => void
  maxRound: number
}

function RoundSelector({ round, setRound, maxRound }: IProps) {
  return (
    <SContainer>
      <SSelectorButton disabled={round === 1} onClick={() => setRound(Math.max(1, round - 1))}>
        <ArrowBackIosIcon />
      </SSelectorButton>
      <p><Trans id="root.round" />{` ${round}`}</p>
      <SSelectorButton disabled={round === maxRound} onClick={() => setRound(Math.min(maxRound, round + 1))}>
        <ArrowForwardIosIcon />
      </SSelectorButton>
    </SContainer>
  )
}

export default RoundSelector

const SContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 600px;
  padding: 16px;
  width: 100%;
`

const SSelectorButton = styled.button<{ disabled?: boolean }>`
  opacity: ${({ disabled }) => (disabled ? '0' : '1')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  & > svg {
    fill: ${({ theme }) => theme.palette.text.primary};
  }

  :hover {
    opacity: 0.7;
  }
`