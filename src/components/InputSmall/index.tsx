import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, Input } from './styles'

export const InputSmall = ({ ...rest }: TextInputProps) => {
  return (
    <Container>
      <Input keyboardType='numeric' {...rest} />
    </Container>
  )
}
