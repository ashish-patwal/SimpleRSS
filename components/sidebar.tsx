import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Box, Text } from 'atoms'

const Sidebar: React.FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m="lg">
          SimpleRss
        </Text>
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
