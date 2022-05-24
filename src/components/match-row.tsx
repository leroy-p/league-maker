import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { generateRoutePath, RoutePath } from '../app/router-config';

import { FMatchFragment } from '../graphql';

interface IProps {
  match: FMatchFragment
  setSelectedMatch?: (value: FMatchFragment) => void
}

function MatchRow({ match, setSelectedMatch }: IProps) {
  const navigate = useNavigate()
  const { player1, player2, score1, score2 } = match
  const isMatchPlayed = score1 !== null && score2 !== null && score1 !== undefined && score2 !== undefined

  function onLinkClicked(event: React.MouseEvent,playerUuid: string) {
    event.stopPropagation()
    navigate(generateRoutePath(RoutePath.PLAYER, { uuid: playerUuid }))
  }

  return (
    <SContainer onClick={setSelectedMatch ? () => setSelectedMatch(match) : undefined}>
      <SPlayerContainer first>
        {player1 && (
          <SLink onClick={(event) => onLinkClicked(event, player1.uuid)} winner={isMatchPlayed && score1 > score2}>
            {`${player1.name} (${player1.rank})`}
          </SLink>
        )}
      </SPlayerContainer>
      <SScoreContainer>
        {isMatchPlayed && <SScoreText winner={score1 > score2}>{score1}</SScoreText>}
        <p>-</p>
        {isMatchPlayed && <SScoreText winner={score1 < score2}>{score2}</SScoreText>}
      </SScoreContainer>
      <SPlayerContainer>
        {player2 && (
          <SLink onClick={(event) => onLinkClicked(event, player2.uuid)} winner={isMatchPlayed && score1 < score2}>
            {`${player2.name} (${player2.rank})`}
          </SLink>
        )}
      </SPlayerContainer>
    </SContainer>
  )
}

export default MatchRow

const SContainer = styled.div`
  align-items: center;
  border: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
  padding: 16px;
  width: 100%;
`

const SPlayerContainer = styled.div<{ first?: boolean; winner?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: ${({ first }) => (first ? 'flex-start' : 'flex-end')};
  width: calc(50% - 48px);
`

const SLink = styled.p<{ winner?: boolean }>`
  cursor: pointer;
  font-weight: ${({ winner }) => (winner ? 'bold' : 'normal')};

  :hover {
    opacity: 0.7;
  }
`

const SScoreContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 48px;

  & > p:nth-child(2) {
    margin: 0 4px;
  }
`

const SScoreText = styled.p<{ winner?: boolean }>`
  font-weight: ${({ winner }) => (winner ? 'bold' : 'normal')};
`
