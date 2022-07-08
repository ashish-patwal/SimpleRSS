import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { useCallback } from 'react'
import { Button, SafeAreaView } from 'react-native'
import { Box } from 'atoms'
import MinRSSLogo from './minrss-logo'

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handlePressMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])

  const handlePressProviders = useCallback(() => {
    navigation.navigate('Provider')
  }, [navigation])

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
          <MinRSSLogo width={128} height={36} color="$sidebarForeground" />
        </Box>
        <Button title="Feeds" onPress={handlePressMain} />
        <Button title="Providers" onPress={handlePressProviders} />
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
