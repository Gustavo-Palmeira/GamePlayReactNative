import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { theme } from '../../global/styles/theme'

export const Container = styled(LinearGradient).attrs({
  colors: [ theme.colors.secondary100, theme.colors.secondary40 ]
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 104px;
  padding: ${getStatusBarHeight()}px 24px 0px 24px;
`

export const Title = styled.Text`
  text-align: center;
  font-family: ${theme.fonts.title700};
  font-size: 20px;
  color: ${theme.colors.heading};
`

export const ActionBox = styled.View`
  width: 24px;
  height: 24px;
`

export const Action = styled.View`

`

