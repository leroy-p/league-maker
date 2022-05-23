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
      <div>
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
      </div>
      <div>
        {lang !== Lang.EN && <button onClick={() => setLang(Lang.EN)}>{Lang.EN}</button>}
        {lang !== Lang.FR && <button onClick={() => setLang(Lang.FR)}>{Lang.FR}</button>}
        {mode !== ThemeMode.LIGHT && <button onClick={() => setMode(ThemeMode.LIGHT)}>{ThemeMode.LIGHT}</button>}
        {mode !== ThemeMode.DARK && <button onClick={() => setMode(ThemeMode.DARK)}>{ThemeMode.DARK}</button>}
      </div>
    </SContainer>
  )
}

export default Header

const SContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px 8px;
  width: 100%;

  & > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    & > button {
      background-color: ${({ theme }) => theme.palette.secondary.main};
      color: ${({ theme }) => theme.palette.primary.main};;
      margin: 0 8px;
      padding: 8px;
    }
  }
`

const SLinkContainer = styled.div<{ active?: boolean }>`
  & > a {
    color: ${({ theme }) => theme.palette.secondary.main};
    font-size: 18px;
    margin: 0 8px;
    font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
    text-decoration: ${({ active }) => (active ? 'underline' : 'none')};

    :hover {
      font-weight: bold;
      opacity: 0.7;
      text-decoration: underline;
    }
  }
`