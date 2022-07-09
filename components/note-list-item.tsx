import React, { useCallback } from 'react'
import { Box, Text, TouchableOpacity } from 'atoms'
import { FeedItem } from 'rss-parserr/lib/types'
import NoteListItemActionView from './note-list-item-action-view'
import SwipeableView from './swipeable-view'
import { FadeIn } from 'react-native-reanimated'

export interface ListItemProps extends FeedItem {
  onPress: (feedDetails: FeedItem) => void
  onSwipeLeft: (feedDetails: FeedItem, done: () => void) => void
}

const NoteListItem: React.FC<ListItemProps> = props => {
  const { onPress, onSwipeLeft, ...rest } = props
  const handlePress = useCallback(() => {
    onPress(rest)
  }, [onPress, rest])
  const handleSwipeLeft = useCallback(
    done => {
      onSwipeLeft && onSwipeLeft(rest, done)
    },
    [rest, onSwipeLeft]
  )

  const renderBackView = useCallback(
    ({ progress }) => <NoteListItemActionView progress={progress} />,
    []
  )
  return (
    <SwipeableView
      bg="yellow"
      onSwipeLeft={handleSwipeLeft}
      backView={renderBackView}
    >
      <Box bg="$background">
        <TouchableOpacity
          bg="$background"
          px="lg"
          py="sm"
          onPress={handlePress}
        >
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            fontWeight="bold"
            mb="xs"
          >
            {props.title}
          </Text>
          <Text
            ellipsizeMode="tail"
            numberOfLines={2}
            fontSize={14}
            opacity={0.7}
          >
            {props.description}
          </Text>
        </TouchableOpacity>
      </Box>
    </SwipeableView>
  )
}

export default NoteListItem
