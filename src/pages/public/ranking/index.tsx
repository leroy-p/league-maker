import React, { useEffect, useState } from 'react'
import { Trans } from '@lingui/react'

import { graphqlClient, FPlayerForLeaderboardFragment } from '../../../graphql'
import Layout from '../../../layout/public'

function Ranking() {
  const [players, setPlayers] = useState<FPlayerForLeaderboardFragment[]>([])

  useEffect(() => {
    async function getLeaderboard() {
      const result = await graphqlClient.PlayerGetLeaderboard()

      setPlayers(result.playerGetLeaderboard)
    }

    getLeaderboard()
  }, [])

  console.log(players)

  return (
    <Layout>
      <p><Trans id="ranking.title" /></p>
    </Layout>
  )
}

export default Ranking