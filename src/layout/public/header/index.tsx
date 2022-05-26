import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { generateRoutePath, RoutePath } from '../../../app/router-config'

import Nav from './nav'
import NavMenu from './nav-menu'
import LangPicker from './lang-picker'
import ThemePicker from './theme-picker'

function Header() {
  return (
    <SContainer>
      {window.innerWidth <= 800 && <NavMenu />}
      <STitleContainer>
        <Link to={generateRoutePath(RoutePath.ROOT, {})}>
          <h1>League Maker</h1>
        </Link>
      </STitleContainer>
      {window.innerWidth > 800 && <Nav />}
      <SButtonsContainer>
        <LangPicker />
        <ThemePicker />
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
  padding: 0 24px;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding: 0 16px;
  }
`

const STitleContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 200px;

  @media screen and (max-width: 800px) {
    margin-left: 16px;
  }

  & > a {
    & > h1 {
      font-size: 22px;
    }

    :hover {
      opacity: 0.7;
    }
  }
`

const SButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 200px;

  & > div {
    margin: 0 4px;
  }
`