import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, Input } from './styles'

export const TextArea = ({ ...rest }: TextInputProps) => {
  return (
    <Container>
      <Input {...rest} />
    </Container>
  )
}
