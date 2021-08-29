import styled from "styled-components/native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";
import { ImageBackground } from "react-native";
import { FlatList } from "react-native";

export const Container = styled.View``

export const BackgroundImage = styled(ImageBackground)`
  width: 100%;
  height: 180px;
  margin-bottom: 28px;
`

export const ImageContent = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 24px;
  margin-bottom: 4px;
`

export const ImageTitle = styled.Text`
  font-size: 28px;
  font-family: ${theme.fonts.title700};
  color: ${theme.colors.heading};
`

export const ImageSubTitle = styled.Text`
  font-size: 12px;
  font-family: ${theme.fonts.text400};
  color: ${theme.colors.heading};
`

export const MembersList = styled(FlatList as new () => FlatList)`
  margin: 24px;
`

export const ButtonBox = styled.View`
  padding: 20px 24px;
  margin-bottom: ${getBottomSpace()};
`