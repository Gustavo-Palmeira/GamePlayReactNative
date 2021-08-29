import React from 'react'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Fontisto } from '@expo/vector-icons'

import Header from '../../components/Header'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { members } from './members'

import { BackgroundImage, ImageTitle, ImageSubTitle, ImageContent, MembersList, ButtonBox } from './styles'
import { theme } from '../../global/styles/theme'
import BannerImg from '../../assets/banner.png'

export function AppointmentDetails() {
  return (
    <Background>
      <Header 
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto 
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />
      <BackgroundImage source={BannerImg}>
        <ImageContent>
          <ImageTitle>Lendários</ImageTitle>
          <ImageSubTitle>É hoje que vamos chegar ao challenger sem perder uma partida da md10</ImageSubTitle>
        </ImageContent>
      </BackgroundImage>
      <ListHeader
        title="Jogadores"
        subtitle="Total 3"
      />
      <MembersList
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
      />
      <ButtonBox>
        <ButtonIcon title="Entrar na partida" />
      </ButtonBox>
    </Background>
  )
}
