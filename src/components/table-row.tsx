import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

import { FPlayerForLeaderboardFragment, MatchResult } from '../graphql';
import { generateRoutePath, RoutePath } from '../app/router-config';

interface IProps {
  player: FPlayerForLeaderboardFragment
  smallScreen: boolean
  index: number
}

function TableRow({ player, smallScreen, index }: IProps) {
  const {
    uuid,
    name,
    rank,
    points,
    played,
    won,
    lost,
    against,
    streak
  } = player
  const diff = player.diff || 0

  return (
    <SContainer index={index}>
      <STd>{rank}</STd>
      <SNameTd>
        <Link to={generateRoutePath(RoutePath.PLAYER, { uuid })}>{name}</Link>
      </SNameTd>
      <STd>
        <span>{points}</span>
      </STd>
      {!smallScreen && (
        <>
          <STd>{played}</STd>
          <STd>{won}</STd>
          <STd>{lost}</STd>
          <STd>{player.for}</STd>
          <STd>{against}</STd>
        </>
      )}
      <STd>{diff <= 0 ? diff.toString() : `+${diff}`}</STd>
      <STd>
        <SStreakContainer>
          {streak && streak.map((value, index) => <SCircle key={index} value={value} />)}
        </SStreakContainer>
      </STd>
    </SContainer>
  )
}

export default TableRow

const SContainer = styled.tr<{ index: number }>`
  background-color: ${({ index, theme }) => (index % 2 === 0 ? theme.palette.primary.main : theme.palette.primary.main)};
  height: 40px;
  width: 100%;

  & > td:nth-child(1) {
    text-align: right;
    width: 24px;
  }

  & > td:nth-last-child(1) {
    padding: 0;
  }
`

const STd = styled.td`
  border: none;
  color: ${({ theme }) => theme.palette.secondary.main};
  padding: 0 8px;
`

const SNameTd = styled.td`
  border: none;
  padding: 0 8px 0 16px;
  text-align: left;

  & > a {
    color: ${({ theme }) => theme.palette.secondary.main};

    :hover {
      opacity: 0.7;
    }
  }
`

const SStreakContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row !important;
  justify-content: center;
  margin: 8px 0;
  padding: 0 4px;
  width: 128px;

  @media screen and (max-width: 800px) {
    width: 108px;
  }
`

const SCircle = styled.div<{ value: MatchResult }>`
  background-color: ${({ value }) => {
    if (value === MatchResult.WON) return '#247a20'
    if (value === MatchResult.LOST) return '#b82323'

    return  "#999999"
  }};
  border-radius: 8px;
  height: 16px;
  margin: 0 4px;
  width: 16px;
  
  @media screen and (max-width: 800px) {
    margin: 0 2px;
  }
`
