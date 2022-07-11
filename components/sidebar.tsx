import { DrawerContentComponentProps } from '@react-navigation/drawer'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import { Box, Pressable, Text } from 'atoms'
import MinRSSLogo from './minrss-logo'

const Sidebar: React.FC<DrawerContentComponentProps> = ({ navigation }) => {
  const handlePressMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])

  const handlePressProviders = useCallback(() => {
    navigation.navigate('Provider')
  }, [navigation])

  const handlePressNewFeed = useCallback(() => {
    navigation.navigate('NewFeed')
  }, [navigation])

  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Box
          alignItems="flex-start"
          justifyContent="center"
          pl="md"
          pb="sm"
          my="xs"
          borderBottomColor="$sidebarSeparator"
          borderBottomWidth={1}
        >
          <MinRSSLogo width={128} height={36} color="$sidebarForeground" />
        </Box>
        <Pressable
          p="xs"
          m="xs"
          onPress={handlePressMain}
          bg="$primary"
          width="80%"
          maxWidth={500}
          borderRadius="sm"
          alignSelf="center"
        >
          <Text textAlign="center">Feeds</Text>
        </Pressable>
        <Pressable
          p="xs"
          m="xs"
          onPress={handlePressProviders}
          bg="$primary"
          width="80%"
          maxWidth={500}
          borderRadius="sm"
          alignSelf="center"
        >
          <Text textAlign="center">Providers</Text>
        </Pressable>
        <Pressable
          p="xs"
          m="xs"
          onPress={handlePressNewFeed}
          bg="$primary"
          width="80%"
          maxWidth={500}
          borderRadius="sm"
          alignSelf="center"
        >
          <Text textAlign="center">NewFeed</Text>
        </Pressable>
      </SafeAreaView>
    </Box>
  )
}

export default Sidebar
