import React from 'react'
import { Button, ButtonProps } from 'react-native'

interface Props extends ButtonProps {
  active: boolean
  icon: string | null
  children: React.ReactNode
}

const MenuButton = ({ active, icon, children, ...props }: Props) => {
  return <Button {...props}>{children}</Button>
}

export default MenuButton
