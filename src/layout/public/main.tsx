import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: JSX.Element
}

function Main({ children }: IProps) {
  return <SContainer>{children}</SContainer>
}

export default Main

const SContainer = styled.main`
  width: 100%;
`