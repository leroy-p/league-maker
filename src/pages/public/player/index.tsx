import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { IRoutePathParams, RoutePath } from '../../../app/router-config'
import { graphqlClient, FPlayerFragment } from '../../../graphql'
import Layout from '../../../layout/public'
import Loading from '../../loading'
import NotFound from '../../error/not-found'
import PlayerInformation from '../../../components/player-information'
import MatchRow from '../../../components/match-row'

function Player() {
  const { uuid } = useParams<IRoutePathParams[RoutePath.PLAYER]>()
  const [player, setPlayer] = useState<FPlayerFragment | null | undefined>(undefined)
  
  useEffect(() => {
    async function getLeaderboard() {
      const result = await graphqlClient.PlayerFindOne({ input: { where: { uuid } } })

      setPlayer(result.playerFindOne || null)
    }

    getLeaderboard()
  }, [uuid])

  if (player === undefined) return <Loading />

  if (player === null) return <NotFound />

  return (
    <Layout>
      <SContainer>
        <PlayerInformation player={player} />
        <MatchesContainer>
          {player.matches && player.matches.map((match) => <MatchRow key={match.uuid} match={match} />)}
        </MatchesContainer>
      </SContainer>
    </Layout>
  )
}

export default Player

const SContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 100%;
`

const MatchesContainer = styled.div`
  margin-top: 24px;
  max-width: 600px;
  width: 100%;
`
