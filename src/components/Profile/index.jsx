import React from 'react'

import { Avatar } from '../Avatar'

import {
  Container,
  Content,
  User,
  Greetings,
  Username,
  Message,
} from './styles'

export function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/Gustavo-Palmeira.png" />
      <Content>
        <User>
          <Greetings>Olá,</Greetings>
          <Username>Gustavo</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </Content>
    </Container>
  )
}
