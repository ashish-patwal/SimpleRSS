import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Box, Text } from 'atoms'
import InkdropLogo from './inkdrop-logo'
import MenuButton from './menu-button'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Box
          alignItems="flex-start"
          pl="md"
          pb="sm"
          mt="xs"
          borderBottomColor="$sidebarSeparator"
          borderBottomWidth={1}
        >
          <InkdropLogo width={128} height={36} color="$sidebarForeground" />
        </Box>
        <MenuButton
          flexDirection="row"
          alignItems="center"
          px="lg"
          py="md"
          mx="lg"
          mt="md"
        >
          <Text textAlign="center">Hello</Text>
        </MenuButton>
        <MenuButton
          flexDirection="row"
          alignItems="center"
          px="lg"
          py="md"
          mx="lg"
          mt="md"
        >
          <Text textAlign="center">Hello</Text>
        </MenuButton>
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
