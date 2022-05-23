import React from 'react'
import { useLingui } from '@lingui/react';
import styled from 'styled-components'

import { FPlayerFragment } from '../graphql';

interface IProps {
  player: FPlayerFragment
}

function PlayerInformation({ player }: IProps) {
  const { i18n } = useLingui()

  const {
    name,
    rank,
    points,
    played,
    diff,
    won,
    lost,
    against,
  } = player

  return (
    <SContainer>
      <h2>{name}</h2>
      <div>
        <div>
          <SText>
            <span>{`${i18n._('ranking.column.rank')}: `}</span>
            {rank}
          </SText>
          <SText>
            <span>{`${i18n._('ranking.column.points')}: `}</span>
            {points}
          </SText>
          <SText>
            <span>{`${i18n._('ranking.column.played')}: `}</span>
            {played}
          </SText>
          <SText>
            <span>{`${i18n._('ranking.column.diff')}: `}</span>
            {diff}
          </SText>
        </div>
        <div>
          <SText>
            <span>{`${i18n._('ranking.column.won')}: `}</span>
            {won}
          </SText>
          <SText>
            <span>{`${i18n._('ranking.column.lost')}: `}</span>
            {lost}
          </SText>
          <SText>
            <span>{`${i18n._('ranking.column.for')}: `}</span>
            {player.for}
          </SText>
          <SText>
            <span>{`${i18n._('ranking.column.against')}: `}</span>
            {against}
          </SText>
        </div>
      </div>
    </SContainer>
  )
}

export default PlayerInformation

const SContainer = styled.div`
  align-items: flex-start;
  border: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;
  padding: 16px 8px;
  width: 100%;

  & > h2 {
    font-weight: 24px;
    margin-bottom: 32px;
    padding: 0 8px;
  }

  & > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;

    & > div {
      align-items: flex-start;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 8px;
      width: 100%;
    }
  }
`

const SText = styled.p`
  margin: 8px 0;

  & > span {
    font-weight: bold;
  }
`