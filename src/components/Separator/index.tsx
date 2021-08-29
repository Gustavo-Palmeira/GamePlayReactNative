import React from 'react'

import { Container } from './styles'

export type SeparatorProps = {
  margin?: number,
}

export function Separator({ margin = 8 }: SeparatorProps) {

  return (
    <Container margin={margin} />
  )
}