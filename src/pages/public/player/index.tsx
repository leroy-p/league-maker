import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { IRoutePathParams, RoutePath } from '../../../app/router-config'
import { graphqlClient, FPlayerFragment } from '../../../graphql'
import Layout from '../../../layout/public'
import Loading from '../../loading'
import NotFound from '../../error/not-found'

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
      <p>{player.name}</p>
    </Layout>
  )
}

export default Player