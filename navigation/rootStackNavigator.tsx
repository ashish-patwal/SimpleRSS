import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from 'types/types'
import MainScreen from 'screens/main'
import DetailScreen from 'screens/detail'

export default function RootStackNavigator() {
  const RootStack = createNativeStackNavigator<RootStackParamList>()

  return (
    <RootStack.Navigator
      initialRouteName="Home"
      screenOptions={{ animation: 'slide_from_right' }}
    >
      <RootStack.Screen
        name="Home"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}
