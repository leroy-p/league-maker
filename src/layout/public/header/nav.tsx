import React from 'react'
import styled from  'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Trans } from '@lingui/react'

import { generateRoutePath, RoutePath } from '../../../app/router-config'

interface IProps {}

function Nav(props: IProps) {
  const location = useLocation()

  return (
    <SContainer>
      <SLinkContainer active={location.pathname === RoutePath.ROOT}>
        <Link to={generateRoutePath(RoutePath.ROOT, {})}>
          <Trans id="root.title" />
        </Link>
      </SLinkContainer>
      <SLinkContainer active={location.pathname === RoutePath.RANKING}>
        <Link to={generateRoutePath(RoutePath.RANKING, {})}>
          <Trans id="ranking.title" />
        </Link>
      </SLinkContainer>
    </SContainer>  
  )
}

export default Nav


const SContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SLinkContainer = styled.div<{ active?: boolean }>`
  & > a {
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: 18px;
    margin: 0 16px;
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};

    :hover {
      opacity: 0.7;
    }
  }
`