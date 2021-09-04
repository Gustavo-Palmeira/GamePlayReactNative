import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`

`

export const CategoryLabel = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
  margin: 36px 0px 18px 24px;
`

export const Label = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`

export const Form = styled.View`
  padding: 32px 24px;
`

export const Select = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 66px;
  border: solid 1px ${theme.colors.secondary50};
  border-radius: 8px;
`

export const SelectImage = styled.View`
  width: 20%;
  height: 100%;
  background-color: ${theme.colors.secondary40};
  border-radius: 8px;
`

export const SelectBody = styled.View`

`

export const ArrowIcon = styled(Feather).attrs({
  name: 'chevron-right',
  color: theme.colors.heading,
  size: 18
})`
  padding: 8px;
`

export const Field = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`

export const FieldContent = styled.View`

`

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Divider = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.text500};
  color: ${theme.colors.heading};
  margin: 4px;
`

export const TextLimit = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.highlight};
  margin-bottom: 4px;
`

export const LabelBox = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0px 12px 0px;
`

export const Submit = styled.View`
  margin: 20px 0px;
`
