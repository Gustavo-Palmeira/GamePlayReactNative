import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.secondary80, theme.colors.secondary100]
})`
  flex: 1;
`
