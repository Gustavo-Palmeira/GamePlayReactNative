import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import { GuildIcon } from '../GuildIcon'

import { Container, ArrowIcon, Content, InfoBox, Title, Owner } from './styles'

export type GuildProps = {
  id: string,
  name: string,
  icon: string | null,
  owner: boolean,
}

export type Props = TouchableOpacityProps & {
  data: GuildProps
}

export const Guild = ({ data, ...rest }: Props) => {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <GuildIcon />

      <Content>
        <InfoBox>
          <Title>{ data.name }</Title>
          <Owner>{ data.owner ? 'Administrador' : 'Convidado' }</Owner>
        </InfoBox>

        <ArrowIcon />
      </Content>
    </Container>
  )
}
