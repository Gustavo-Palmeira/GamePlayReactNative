import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";
import { TextInput } from "react-native";

export const Container = styled.View``

export const Input = styled(TextInput)`
  width: 100%;
  height: 100px;
  text-align: center;
  background-color: ${theme.colors.secondary40};
  color: ${theme.colors.heading};
  border-radius: 8px;
  font-family: ${theme.fonts.text400};
  font-size: 14px;
`