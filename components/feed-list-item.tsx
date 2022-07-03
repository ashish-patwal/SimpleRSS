import { Box, Text, TouchableOpacity } from 'atoms'
import React, { useCallback } from 'react'
import { Dimensions } from 'react-native'
import { Feed } from 'types/types'

export interface FeedProps extends Feed {
  numColumns: number
  onPress: (feed: Feed) => void
}

const FeedListItem: React.FC<FeedProps> = props => {
  const { onPress, ...rest } = props
  const { width } = Dimensions.get('window')
  const height = (1.2 * width) / rest.numColumns

  const handlePress = useCallback(() => {
    onPress(rest)
  }, [onPress, rest])

  return (
    <Box
      flex={1}
      borderRadius="xs"
      alignItems="center"
      justifyContent="center"
      backgroundColor="$primary"
      margin="sm"
      height={height}
    >
      <TouchableOpacity bg="$primary" px="lg" py="sm" onPress={handlePress}>
        <Text>{rest.title}</Text>
      </TouchableOpacity>
    </Box>
  )
}

export default FeedListItem