import styled from 'styled-components/native'
import { theme } from '../../global/styles/theme'
import { SeparatorProps } from './index'

export const Container = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.secondary40};
  margin: ${(props: SeparatorProps) => `${props.margin}px`};
  align-self: center;
`
