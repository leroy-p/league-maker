import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { Trans } from '@lingui/react'

import { LangContext } from '../../app/context/lang'
import { Lang } from '../../app/context/lang/hook'
import { ThemeContext } from '../../app/context/theme'
import { ThemeMode } from '../../app/context/theme/hook'
import { generateRoutePath, RoutePath } from '../../app/router-config'

function Header() {
  const location = useLocation()
  const { lang, setLang } = useContext(LangContext)
  const { mode, setMode } = useContext(ThemeContext)

  return (
    <SContainer>
      <STitleContainer>
        <Link to={generateRoutePath(RoutePath.ROOT, {})}>
          <h1>League Maker</h1>
        </Link>
      </STitleContainer>
      <SNavContainer>
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
      </SNavContainer>
      <SButtonsContainer>
        {lang !== Lang.EN && <button onClick={() => setLang(Lang.EN)}>{Lang.EN}</button>}
        {lang !== Lang.FR && <button onClick={() => setLang(Lang.FR)}>{Lang.FR}</button>}
        {mode !== ThemeMode.LIGHT && <button onClick={() => setMode(ThemeMode.LIGHT)}>{ThemeMode.LIGHT}</button>}
        {mode !== ThemeMode.DARK && <button onClick={() => setMode(ThemeMode.DARK)}>{ThemeMode.DARK}</button>}
      </SButtonsContainer>
    </SContainer>
  )
}

export default Header

const SContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  display: flex;
  height: 64px;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 0  8px;
  width: 100%;
`

const STitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px;

  & > a {
    & > h1 {
      font-size: 22px;
    }

    :hover {
      opacity: 0.7;
    }
  }
`

const SNavContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SLinkContainer = styled.div<{ active?: boolean }>`
  & > a {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 18px;
    margin: 0 16px;
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
    text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

    :hover {
      opacity: 0.7;
      text-decoration: underline;
    }
  }
`

const SButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 200px;

  & > button {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
    color: ${({ theme }) => theme.palette.secondary.main};;
    margin: 0 8px;
    padding: 8px;
    text-transform:  uppercase;

    :hover {
      opacity: 0.7;
    }
  }
`