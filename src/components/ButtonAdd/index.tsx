import React from "react"
import { RectButton, RectButtonProps  } from "react-native-gesture-handler"
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { theme } from "../../global/styles/theme"

type ButtonAddProps = RectButtonProps

export function ButtonAdd({...rest} : ButtonAddProps) {
  
  return (
    <RectButton
      style={{
        width: 48,
        height: 48,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}
    >
      <MaterialCommunityIcons 
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  )
}
