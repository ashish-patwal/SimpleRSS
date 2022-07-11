import React, { Suspense } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import Navigations from 'navigation'
import StatusBar from 'components/status-bar'
import { useAtom } from 'jotai'
import { activeThemeAtom } from 'states/theme'
import HydratingScreen from 'screens/hydrating'

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)
  return (
    <Suspense fallback={HydratingScreen}>
      <NavigationContainer>
        <ThemeProvider theme={activeTheme}>
          <StatusBar />
          <Navigations />
        </ThemeProvider>
      </NavigationContainer>
    </Suspense>
  )
}

export default App
