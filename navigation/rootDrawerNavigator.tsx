import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Sidebar from 'components/sidebar'
import { HomeDrawerParamList } from 'types/types'
import RootStackNavigator from './rootStackNavigator'
import ProviderStackNavigator from './providerStackNavigator'
import NewFeed from 'screens/add-new-feed-provider'

const Drawer = createDrawerNavigator<HomeDrawerParamList>()

export default function RootDrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{ drawerType: 'back', swipeEdgeWidth: 100 }}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={RootStackNavigator}
        options={{ headerShown: false }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="Provider"
        component={ProviderStackNavigator}
        options={{ headerShown: false }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="NewFeed"
        component={NewFeed}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  )
}
