import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export function Button({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton {...rest}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </RectButton>
  );
}
