import React from 'react'

import { Guild, GuildProps } from '../../components/Guild'
import { Separator } from '../../components/Separator'

import { guilds } from './guilds'
import { Container, GuildsList } from './styles'

type Props = {
  handleGuildSelect: (guild: GuildProps) => void
}

const Guilds = ({ handleGuildSelect }: Props) => {
  return (
    <Container>
      <GuildsList
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild onPress={() => handleGuildSelect(item)} data={item} />
        )}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <Separator margin={16} />}
      />
    </Container>
  )
}

export default Guilds
