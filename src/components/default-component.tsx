import React from 'react'
import styled from  'styled-components'

interface IProps {}

function DefaultComponent(props: IProps) {
  return (
    <SContainer></SContainer>
  )
}

export default DefaultComponent

const SContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`
