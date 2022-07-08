import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProviderStackParamList } from 'types/types'
import ProviderDetailScreen from 'screens/provider-details'
import ProviderScreen from 'screens/providers'

export default function ProviderStackNavigator() {
  const ProviderStack = createNativeStackNavigator<ProviderStackParamList>()

  return (
    <ProviderStack.Navigator initialRouteName="Providers">
      <ProviderStack.Screen
        name="Providers"
        component={ProviderScreen}
        options={{ headerShown: false }}
      />
      <ProviderStack.Screen
        name="ProviderDetail"
        component={ProviderDetailScreen}
        options={{ headerShown: false }}
      />
    </ProviderStack.Navigator>
  )
}
