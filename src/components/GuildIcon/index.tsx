import React from "react"

import{ Container } from './styles'

export function GuildIcon() {
  const uri = 'https://pbs.twimg.com/profile_images/1392925163969200136/wNZYmQXx_400x400.jpg'

  return (
    <Container
      source={{ uri }}
      resizeMode="cover"
    />
  )
}