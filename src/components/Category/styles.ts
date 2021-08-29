import styled from 'styled-components/native'
import { LinearGradient } from "expo-linear-gradient";
import { theme } from '../../global/styles/theme'

type isChecked = {
  checked: Boolean
}

export const Container = styled(LinearGradient).attrs({
  colors: [theme.colors.secondary50, theme.colors.secondary70]
})`
  width: 104px;
  height: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 8px;
`

export const Content = styled(LinearGradient).attrs((props: isChecked) =>
  props.checked
    ? { colors: [ theme.colors.secondary75, theme.colors.secondary40 ] }
    : { colors: [ theme.colors.secondary50, theme.colors.secondary40 ] }
)`
  width: 100px;
  height: 116px;
  border-radius: 8px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
  opacity: ${(props: isChecked) => props.checked ? 1 : 0.5};
`

export const Check = styled.View`
  position: absolute;
  right: 7px;
  top: 7px;
  width: 10px;
  height: 10px;
  background-color: ${theme.colors.secondary100};
  border: solid 1px ${theme.colors.secondary50};
  border-radius: 3px;
`

export const Checked = styled.View`
  position: absolute;
  right: 7px;
  top: 7px;
  width: 10px;
  height: 10px;
  background-color: ${theme.colors.primary};
  border-radius: 3px;
`

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 15px;
`
