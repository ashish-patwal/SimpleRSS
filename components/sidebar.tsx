import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Box, Text } from 'atoms'
import InkdropLogo from './inkdrop-logo'

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
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
