import Touchable, { Props } from 'atoms/touchable'
import React from 'react'
import { Platform } from 'react-native'

const MenuButton: React.FC<Props> = props => (
  <Touchable
    borderRadius="md"
    backgroundColor="$primary"
    rippleColor="$secondary"
    {...props}
    pressed={{ opacity: Platform.select({ ios: 0.6 }) }}
  />
)

export default MenuButton
