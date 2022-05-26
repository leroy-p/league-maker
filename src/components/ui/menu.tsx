import React from 'react'
import styled from  'styled-components'
import { ThemeMode } from '../../app/context/theme/hook'
import { Lang } from '../../app/context/lang/hook'

export interface IMenuOptions {
  label?: string
  color?: { main: string; light: string }
  value: any
}

interface IProps {
  options: IMenuOptions[]
  value: any
  setValue: (value: any) => void
}

function Menu({ options, value, setValue }: IProps) {
  return (
    <SContainer>
      {options && options.map((option) => (
        <SOptionContainer current={value === option.value} key={option.value} onClick={() => setValue(option.value)}>
          {option.label && <p>{option.label}</p>}
          {option.color && <SColorContainer main={option.color.main} light={option.color.light} />}
        </SOptionContainer>
      ))}
    </SContainer>
  )
}

export default Menu

const SContainer = styled.div`
  align-items: center;
  border-bottom: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  border-left: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  border-right: ${({ theme }) => `solid 2px ${theme.palette.secondary.main}`};
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: -2;
  position: absolute;
  top: 36px;
  width: 72px;

  & > button:nth-child(1) {
    margin-top: 4px;
  }

  & > button:nth-last-child(1) {
    margin-bottom: 4px;
  }
`

const SOptionContainer = styled.button<{ current: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: ${({ current })  => (current ? 'bold' : 'normal')};
  height: 32px;
  justify-content: center;
  padding: 4px;
  width: 100%;

  :hover  {
    opacity: 0.7;
  }
`

const SColorContainer = styled.div<{ main: string; light: string }>`
  border: ${({ light }) => `solid 2px ${light}`};
  background-color: ${({ main }) => main};
  height: 100%;
  width: 100%;
`