import React from "react";
import { useNavigation } from "@react-navigation/core";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from "../../assets/illustration.png";
import { Background } from '../../components/Background'

import { Container, Content, Image, Title, Subtitle } from "./styles";

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <Background>
      <Container>
        <Image source={IllustrationImg} resizeMode="stretch" />
        <Content>
          <Title>
            Conecte-se {"\n"}
            e organize suas {"\n"}
            jogatinas
          </Title>
          <Subtitle>
            Crie grupos para jogar seus games {"\n"}
            favoritos com seus amigos
          </Subtitle>
          <ButtonIcon 
            title="Entrar com Discord" 
            onPress={handleSignIn}
          />
        </Content>
      </Container>
    </Background>
  );
}
