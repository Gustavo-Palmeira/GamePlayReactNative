import React, { ReactNode } from 'react'

import { Container } from './styles'

type BackgroundProps = {
  children: ReactNode,
}

export function Background({ children } : BackgroundProps) {

  return (
    <Container>
      { children }
    </Container>
  )
}
