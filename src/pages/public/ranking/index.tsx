import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Trans } from '@lingui/react'

import { graphqlClient, FPlayerForLeaderboardFragment } from '../../../graphql'
import Layout from '../../../layout/public'
import TableRow from '../../../components/table-row'

function Ranking() {
  const [players, setPlayers] = useState<FPlayerForLeaderboardFragment[]>([])

  useEffect(() => {
    async function getLeaderboard() {
      const result = await graphqlClient.PlayerGetLeaderboard()

      setPlayers(result.playerGetLeaderboard)
    }

    getLeaderboard()
  }, [])

  const smallScreen = window.innerWidth < 800

  return (
    <Layout>
      <SContainer>
        <h2><Trans id="ranking.title" /></h2>
        <STable>
          <thead>
            <STr>
              <STh />
              <STh />
              <STh>
                {!smallScreen ? (
                  <Trans id="ranking.column.points" />
                ) : (
                  <Trans id="ranking.column.pts" />
                )}
              </STh>
              {!smallScreen && (
                <>
                  <STh><Trans id="ranking.column.played" /></STh>
                  <STh><Trans id="ranking.column.won" /></STh>
                  <STh><Trans id="ranking.column.drawed" /></STh>
                  <STh><Trans id="ranking.column.lost" /></STh>
                  <STh><Trans id="ranking.column.for" /></STh>
                  <STh><Trans id="ranking.column.against" /></STh>
                </>
              )}
              <STh><Trans id="ranking.column.diff" /></STh>
              <STh><Trans id="ranking.column.streak" /></STh>
            </STr>
          </thead>
          <tbody>
            {players && players.map((player, index) => (
              <TableRow index={index} key={player.uuid} player={player} smallScreen={smallScreen} />
            ))}
          </tbody>
        </STable>
      </SContainer>
    </Layout>
  )
}

export default Ranking

const SContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  width: 100%;

  & > h2 {
    font-weight: 24px;
    margin-bottom: 32px;
  }
`

const STable = styled.table`
  border: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  max-width: 1000px;
  width: 100%;
`

const STr = styled.tr`
  border-bottom: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  height: 40px;
  padding: 8px;
  width: 100%;

  & > th:nth-child(1) {
    width: 24px;
  }

  & > th:nth-last-child(1) {
    padding: 0;
    text-align: center;
    width: 128px;

    @media screen and (max-width: 800px) {
      width: 108px;
    }
  }
`

const STh = styled.th`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
  padding: 8px;
  width: 100%;
`