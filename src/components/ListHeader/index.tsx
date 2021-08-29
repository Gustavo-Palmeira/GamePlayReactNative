import React from "react"

import{ Container, Title, SubTitle } from './styles'

type ListHeaderProps = {
  title: string;
  subtitle: string;
}

export function ListHeader({ title, subtitle } : ListHeaderProps) {
  
  return (
    <Container>
      <Title>{ title }</Title>
      <SubTitle>{ subtitle }</SubTitle>
    </Container>
  )
}