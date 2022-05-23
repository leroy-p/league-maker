import React from 'react'
import styled from 'styled-components'
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
  height: calc(100vh - 64px);
  width: 100%;

  & > span {
    margin-bottom: 64px;
  }
`