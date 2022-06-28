import { createBox } from '@shopify/restyle'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { FlatListProps } from 'react-native'
import { FeedItem } from 'rss-parserr/lib/types'
import { Theme } from 'themes'

const StyledFlatList = createBox<Theme, AnimateProps<FlatListProps<FeedItem>>>(
  Animated.FlatList
)

export default StyledFlatList
