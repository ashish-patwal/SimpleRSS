import * as React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Sidebar from 'components/sidebar'
import MainScreen from 'screens/main'
import AboutScreen from 'screens/about'
import { HomeDrawerParamList } from 'types/types'

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
        component={MainScreen}
        options={{ headerShown: false }}
      ></Drawer.Screen>
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      ></Drawer.Screen>
    </Drawer.Navigator>
  )
}
