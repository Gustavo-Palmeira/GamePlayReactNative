import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { theme } from "../../global/styles/theme";
import { Feather } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)<TouchableOpacityProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0px 24px;
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const InfoBox = styled.View`

`

export const Title = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 18px;
  margin-bottom: 4px;
`

export const Owner = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 14px;
`

export const ArrowIcon = styled(Feather).attrs({
  name: 'chevron-right',
  color: theme.colors.heading,
  size: 18
})`
  padding: 8px;
`