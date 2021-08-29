import React, { ReactNode } from 'react'
import { useNavigation } from '@react-navigation/native'
import { theme } from '../../global/styles/theme'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { Container, Title, ActionBox, Action } from './styles'

type HeaderProps = {
  title: string;
  action?: ReactNode;
}

export default function Header({ title, action } : HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return ( 
    <Container>
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Feather 
          name="arrow-left"
          size={24}
          color={theme.colors.heading}
        />
      </BorderlessButton>
      
      <Title>{ title }</Title>

      <ActionBox>
        {action && (
          <Action>{ action }</Action>
        )}
      </ActionBox>

    </Container>
  )
}
