import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { FlatList } from "react-native";

export const Container = styled.View`
`

export const Content = styled.View`
  margin-top: 42px;
`

export const Header = styled.View`
  width: 100%;
  padding: 0px 24px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 26}px;
  margin-bottom: 22px;
`

export const Appointments = styled(FlatList as new () => FlatList)`
  margin: 24px 24px 0px 24px;
`
