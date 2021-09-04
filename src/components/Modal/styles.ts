import styled from "styled-components/native";
import { Modal, ModalProps } from 'react-native'
import { theme } from "../../global/styles/theme";

export const ModalView = styled(Modal).attrs<ModalProps>({
  transparent: true,
  animationType: "slide"
})``

export const Overlay = styled.View`
  flex: 1;
  background-color: ${theme.colors.overlay};
`

export const Content = styled.View`
  flex: 1;
  margin-top: 100px;
`

export const Bar = styled.View`
  width: 40px;
  height: 2px;
  border-radius: 2px;
  background-color: ${theme.colors.secondary30};
  align-self: center;
  margin-top: 14px;
`