import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.secondary50, theme.colors.secondary70]
})`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-right: 22px;
`

export const Image = styled.Image`
  width: 46px;
  height: 46px;
  border-radius: 8px;
`
