import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

type themeColors = {
  [key: string]: string
}

const bulletColors: themeColors = {
  online: theme.colors.online,
  offline: theme.colors.offline
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`

export const Content = styled.View`
  width: 100%;
`

export const Username = styled.Text`
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  font-size: 20px;
`

export const StatusBox = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Status = styled.Text`
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  font-size: 14px;
`

export const StatusBullet = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-right: 8px;
  background-color: ${(props: themeColors) => bulletColors[props.bullet]};
`