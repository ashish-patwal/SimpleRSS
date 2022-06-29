import Box from 'atoms/box'
import StyledFlatList from 'atoms/styledFlatList'
import React, { useCallback, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent
} from 'react-native'
import notes from '__mocks__/fixtures/notes'
import NoteListItem from './note-list-item'
import { feedsAtom } from 'states/feeds'
import { FeedItem } from 'rss-parserr/lib/types'
import { useAtom } from 'jotai'
import axios from 'axios'
import parseRSS from 'utility/parseFeed'
import Container from 'atoms/container'

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (noteId: string) => void
  onItemSwipeLeft: (noteId: string, cancel: () => void) => void
}

const NoteList: React.FC<Props> = ({
  onScroll,
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft
}) => {
  const [feedState, setFeedState] = useAtom(feedsAtom)
  const [loading, setLoading] = useState(true)
  const [feedItems, setFeedItems] = useState<FeedItem[]>([])

  const getFeed = useCallback(() => {
    if (feedState.feeds.length > 0) {
      setLoading(true)

      const providers: Array<string> = []
      for (let i = 0; i < feedState.feeds.length; i++) {
        providers.push(feedState.feeds[i].url)
      }

      let requests = providers.map(provider =>
        axios.get(provider).catch(e => null)
      )

      axios
        .all(requests)
        .then(
          axios.spread((...responses) => {
            let xmlObjects: string[] = []
            for (let i = 0; i < responses.length; i++) {
              xmlObjects.push(responses[i]!.data)
            }
            return parseRSS(xmlObjects, feedState.sortMode, 'today')
          })
        )
        .then(result => {
          console.log(result)
          setFeedItems(result)
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setLoading(false)
        })
    }
  }, [feedState])

  useEffect(() => {
    getFeed()
  }, [feedState, getFeed])

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <NoteListItem
          {...item}
          onPress={onItemPress}
          onSwipeLeft={onItemSwipeLeft}
        />
      )
    },
    [onItemPress, onItemSwipeLeft]
  )

  if (loading) {
    return (
      <Container justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Container>
    )
  }

  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={feedItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
    />
  )
}

export default NoteList
