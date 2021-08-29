import React from "react"

import{ Container } from './styles'

export function GuildIcon() {
  const uri = 'https://icon-library.com/images/discord-icon-color/discord-icon-color-23.jpg'

  return (
    <Container
      source={{ uri }}
      resizeMode="cover"
    />
  )
}