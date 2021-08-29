import React from "react"

import { Avatar } from "../Avatar"
import { Separator } from "../Separator"

import{ Container, Content, Username, StatusBox, StatusBullet, Status } from './styles'

export type MemberProps = {
  id: string,
  username: string,
  avatarUrl: string,
  status: string,
}

type Props = {
  data: MemberProps
}

export function Member({ data }: Props) {
  const { username, avatarUrl, status  } = data
  const isOnline = status === 'online'
  
  return (
    <Container>
      <Avatar urlImage={avatarUrl} />
      
      <Content>
        <Username>
          { username }
        </Username>

        <StatusBox>
          <StatusBullet bullet={status}></StatusBullet>
          <Status>
            { isOnline ? 'Online' : 'Offline' }
          </Status>
        </StatusBox>

        <Separator />
      </Content>
    </Container>
  )
}
