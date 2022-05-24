import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Trans, useLingui } from '@lingui/react'

import { graphqlClient, FMatchFragment } from '../../../graphql'
import Loading from '../../loading'
import Layout from '../../../layout/public'
import RoundSelector from '../../../components/round-selector';
import MatchRow from '../../../components/match-row'
import MatchInformation from '../../../components/match-information'

function Root() { 
  const { i18n } = useLingui()
  const [matches, setMatches] = useState<FMatchFragment[][]>([])
  const [round, setRound] = useState<number>(1)
  const [selectedMatch, setSelectedMatch] = useState<FMatchFragment | null>(null)

  useEffect(() => {
    async function getMatches() {
      const result = await graphqlClient.MatchGetCalendar()

      setMatches(result.matchGetCalendar)
    }

    getMatches()
  }, [])

  useEffect(() => {
    document.title = `${i18n._('root.title')} - League Maker`
  }, [i18n])

  async function updateScore(matchUuid: string, score1: number, score2: number) {
    setMatches([])

    await graphqlClient.MatchUpdateScore({ input: { uuid: matchUuid, score1, score2 }})
    const result = await graphqlClient.MatchGetCalendar()

    setMatches(result.matchGetCalendar)
    setSelectedMatch(null)
  }

  if (matches.length === 0) return <Loading />

  return (
    <Layout>
      <SContainer>
        <h2><Trans id="root.title" /></h2>
        <RoundSelector maxRound={matches.length} round={round} setRound={setRound} />
        <MatchesContainer>
          {matches[round - 1] && matches[round - 1].map((match) => <MatchRow key={match.uuid} match={match} setSelectedMatch={setSelectedMatch} />)}
        </MatchesContainer>
        {selectedMatch && <MatchInformation close={() => setSelectedMatch(null)} match={selectedMatch} updateScore={updateScore} />}
      </SContainer>
    </Layout>
  )
}

export default Root

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

const MatchesContainer = styled.div`
  margin-top: 24px;
  max-width: 600px;
  width: 100%;
`
