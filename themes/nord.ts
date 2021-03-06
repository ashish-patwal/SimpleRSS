import { createTheme } from '@shopify/restyle'
import { StatusBarStyle } from 'react-native'
import light, { Theme } from './light'

// Palette
const p = {
  // Badge
  purple: '#A087FF',

  // Polar Night
  nord0: '#2E3440',
  nord1: '#3B4252',
  nord2: '#434C5E',
  nord3: '#4C566A',

  // Snow Storm
  nord4: '#D8DEE9',
  nord5: '#E5E9F0',
  nord6: '#ECEFF4',

  // Frost
  nord7: '#8FBCBB',
  nord8: '#88C0D0',
  nord9: '#81A1C1',
  nord10: '#5E81AC',

  // Aurora
  nord11: '#BF616A',
  nord12: '#D08770',
  nord13: '#EBCB8B',
  nord14: '#A3BE8C',
  nord15: '#B48EAD'
}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: p.nord10,
    $secondary: p.nord9,
    $windowBackground: p.nord0,
    $background: p.nord0,
    $foreground: p.nord4,
    $separator: p.nord3,
    $navbarBackground: p.nord0,
    $headerBarBackground: p.nord2,
    $sidebarBackground: p.nord3,
    $sidebarForeground: p.nord4,
    $sidebarSeparator: p.nord4 + '20',
    $badge: p.purple
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg'
    }
  },
  badgeVariants: {
    defaults: {
      backgroundColor: '$badge',
      borderRadius: 'sm',
      padding: 'xs'
    },
    category: {
      backgroundColor: '$badge',
      borderRadius: 'sm',
      padding: 'xs',
      px: 'sm',
      mr: 'sm'
    }
  },
  textInputVariants: {
    defaults: {
      color: '$foreground',
      fontSize: 16
    }
  }
})

export default theme
