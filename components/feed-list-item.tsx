import { Box, Pressable, Text } from 'atoms'
import React, { useCallback } from 'react'
import { Dimensions, Image } from 'react-native'
import { Feed } from 'rss-parserr/lib/types'

export interface FeedProps extends Feed {
  numColumns: number
  onPress: (feed: Feed) => void
}

const FeedListItem: React.FC<FeedProps> = props => {
  const { onPress, ...feedDetails } = props
  const { width } = Dimensions.get('window')
  const height = (1.2 * width) / feedDetails.numColumns

  const handlePress = useCallback(() => {
    onPress(feedDetails)
  }, [onPress, feedDetails])

  if (feedDetails.title == 'empty_card_title') {
    return (
      <Box
        flex={1}
        overflow="hidden"
        margin="sm"
        borderRadius="xs"
        height={height}
        bg="$background"
      ></Box>
    )
  }

  return (
    <Box
      flex={1}
      overflow="hidden"
      margin="sm"
      borderRadius="xs"
      height={height}
      bg="$sidebarBackground"
    >
      <Pressable onPress={handlePress} flex={1}>
        <Image
          loadingIndicatorSource={require('images/reboot.png')}
          source={
            feedDetails.image?.url
              ? { uri: feedDetails.image.url }
              : require('images/blank2.jpeg')
          }
          style={{
            flex: 1,
            alignSelf: 'center',
            aspectRatio: 1,
            resizeMode: 'cover'
          }}
        />
        <Text
          p="xs"
          ellipsizeMode="tail"
          style={{ position: 'absolute', bottom: 0, left: 0 }}
        >
          {feedDetails.title}
        </Text>
      </Pressable>
    </Box>
  )
}

export default FeedListItem
