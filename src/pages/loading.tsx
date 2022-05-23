import React from 'react'
import styled from 'styled-components'
import { Trans } from '@lingui/react'
import { CircularProgress } from '@mui/material';

import Layout from '../layout/public'

function Loading() {
  return (
    <Layout>
      <SContainer>
        <CircularProgress color="secondary" size={80} />
      </SContainer>
    </Layout>
  )
}

export default Loading

const SContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;

  & > {
    margin-top: 32px;
  }
`