import React, { useState } from 'react'
import styled from  'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Trans } from '@lingui/react'
import DehazeIcon from '@mui/icons-material/Dehaze'
import CloseIcon from '@mui/icons-material/Close'

import { generateRoutePath, RoutePath } from '../../../app/router-config'

interface IProps {}

function NavMenu(props: IProps) {
  const location = useLocation()
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <SContainer onClick={() => setOpen(!open)}>  
        {open ? <CloseIcon /> : <DehazeIcon />}
      </SContainer>
      {open && (
        <SLinksContainer>
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
        </SLinksContainer>
      )}
    </>
  )
}

export default NavMenu


const SContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;

  :hover {
    opacity: 0.7;
  }

  & > svg {
    color: ${({ theme }) => theme.palette.text.primary};   
  }
`

const SLinksContainer = styled.div`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-right: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: flex-start;
  left: 0;
  padding: 16px 0;
  position: fixed;
  top: 64px;
  width: 128px;
`

const SLinkContainer = styled.div<{ active?: boolean }>`
  margin: 8px 0;
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