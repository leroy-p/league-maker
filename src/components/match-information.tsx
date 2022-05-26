import React, { useState } from 'react'
import styled from  'styled-components'
import { Trans } from '@lingui/react'
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel';

import { FMatchFragment, graphqlClient } from '../graphql'
import { generateRoutePath, RoutePath } from '../app/router-config';
import Dialog from './ui/dialog'

interface IProps {
  match: FMatchFragment
  close: () => void
  updateScore: (matchUuid: string, score1: number, score2: number) => void
}

function MatchInformation({ match, close, updateScore }: IProps) {
  const { round, player1, player2, score1, score2 } = match
  const [editMode, setEditMode] = useState<boolean>(false)
  const [newScore1, setNewScore1] = useState<number>(score1 || 0)
  const [newScore2, setNewScore2] = useState<number>(score2 || 0)
  const isMatchPlayed = score1 !== null && score2 !== null && score1 !== undefined && score2 !== undefined

  function handleChangeScore(score: number, setNewScore: (value: number) => void) {
    if (score < 0 || isNaN(score)) score = 0

    setNewScore(score)
  }

  async function save() {
    await updateScore(match.uuid, newScore1, newScore2)
  }

  return (
    <Dialog close={close}>
      <SContainer onClick={(event) => event.stopPropagation()}>
        <STitleContainer>
          <h6><Trans id="root.round" />{` ${round}`}</h6>
        </STitleContainer>
        <SMainContainer>
          {player1 && <Link to={generateRoutePath(RoutePath.PLAYER, { uuid: player1.uuid })}>{`${player1.name} (${player1.rank})`}</Link>}
          <SScoreContainer>
            {isMatchPlayed && !editMode && <SScoreText winner={score1 > score2}>{score1}</SScoreText>}
            {editMode && <input type="number" onChange={(event) => handleChangeScore(parseInt(event.target.value), setNewScore1)} value={newScore1} />}
            <p>-</p>
            {isMatchPlayed && !editMode && <SScoreText winner={score1 < score2}>{score2}</SScoreText>}
            {editMode && <input type="number" onChange={(event) => handleChangeScore(parseInt(event.target.value), setNewScore2)} value={newScore2} />}
          </SScoreContainer>
          {player2 && <Link to={generateRoutePath(RoutePath.PLAYER, { uuid: player2.uuid })}>{`${player2.name} (${player2.rank})`}</Link>}
        </SMainContainer>
        <SEditButton onClick={() => setEditMode(!editMode)}>
          {editMode ? <CancelIcon /> : <EditIcon />}
        </SEditButton>
        {editMode && (
          <SSaveButton onClick={save}>
            <SaveIcon />
          </SSaveButton>
        )}
      </SContainer>
    </Dialog>
  )
}

export default MatchInformation

const SContainer = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  cursor: auto;
  display: flex;
  flex-direction: column;
  height: 220px;
  justify-content: flex-start;
  padding: 24px;
  position: relative;
  width: 560px;

  @media screen and (max-width: 800px) {
    width: calc(100% - 32px);
  }
`

const STitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 24px;
  justify-content: center;

  &  > h6 {
    font-size: 18px;
  }
`

const SMainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: calc(100% - 24px);
  justify-content: center;
  width: 100%;

  & > a {
    width: calc(50% - 64px);

    :hover {
      opacity: 0.7;
    }
  }

  & > a:nth-last-child(1) {
    text-align: right;
  }
`

const SScoreContainer = styled.div<{ first?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 128px;

  & > p:nth-child(2) {
    margin: 0 8px;
  }

  & > input {
    border: ${({ theme }) => `solid 1px ${theme.palette.secondary.main}`};
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 16px;
    padding: 8px;
    width: 56px;
  }
`

const SScoreText = styled.p<{ winner?: boolean }>`
  font-weight: ${({ winner }) => (winner ? 'bold' : 'normal')};
`

const SEditButton = styled.button`
  height: 24px;
  position: absolute;
  right: 24px;
  top: 24px;
  width: 24px;

  :hover {
    opacity: 0.7;
  }

  & > svg {
    fill: ${({ theme }) => theme.palette.text.primary};
    height: 100%;
    width: 100%;
  }
`

const SSaveButton = styled.button`
  height: 24px;
  position: absolute;
  right: 64px;
  top: 24px;
  width: 24px;

  :hover {
    opacity: 0.7;
  }

  & > svg {
    fill: ${({ theme }) => theme.palette.text.primary};
    height: 100%;
    width: 100%;
  }
`