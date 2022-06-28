import React, { useCallback } from 'react'
import { Box, Text, TouchableOpacity } from 'atoms'
import { FeedItem } from 'rss-parserr/lib/types'
import NoteListItemActionView from './note-list-item-action-view'
import SwipeableView from './swipeable-view'

export interface ListItemProps extends FeedItem {
  onPress: (noteId: string) => void
  onSwipeLeft: (noteId: string, done: () => void) => void
}

const NoteListItem: React.FC<ListItemProps> = props => {
  const { onPress, onSwipeLeft, id } = props
  const handlePress = useCallback(() => {
    onPress(id)
  }, [onPress, id])
  const handleSwipeLeft = useCallback(
    done => {
      onSwipeLeft && onSwipeLeft(id, done)
    },
    [id, onSwipeLeft]
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
