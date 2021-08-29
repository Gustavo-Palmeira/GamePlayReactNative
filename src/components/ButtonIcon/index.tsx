import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import DiscordImg from "../../assets/discord.png";
import { Container, IconWrapper, Image, Title } from "./styles";

type ButtonIconProps = RectButtonProps & {
  title: string;
};

export function ButtonIcon({ title, ...rest }: ButtonIconProps) {
  return (
    <RectButton {...rest}>
      <Container>
        <IconWrapper>
          <Image source={DiscordImg} />
        </IconWrapper>
        <Title>{title}</Title>
      </Container>
    </RectButton>
  );
}
