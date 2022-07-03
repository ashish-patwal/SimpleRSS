import { createBox } from '@shopify/restyle'
import { ScrollView } from 'react-native'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { Theme } from 'themes'

const styledScrollView = createBox<Theme, AnimateProps<ScrollView>>(
  Animated.ScrollView
)

export default styledScrollView
