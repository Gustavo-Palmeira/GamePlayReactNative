import React, { ReactNode } from 'react'
import { ModalProps } from 'react-native'

import { Background } from '../Background'

import { ModalView, Overlay, Content, Bar } from './styles'

type Props = ModalProps & {
  children: ReactNode
}

export const Modal = ({children, ...rest}: Props) => {
  return (
    <ModalView {...rest}>
      <Overlay>
        <Content>
          <Background>
            <Bar />
            { children }
          </Background>
        </Content>
      </Overlay>
    </ModalView>
  )
}
