import Box from 'atoms/box'
import StyledFlatList from 'atoms/styledFlatList'
import React, { useCallback, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl
} from 'react-native'
import NoteListItem from './note-list-item'
import { feedsAtom } from 'states/feeds'
import { FeedItem } from 'rss-parserr/lib/types'
import { useAtom } from 'jotai'
import axios from 'axios'
import parseRSS from 'utility/parseFeed'
import Container from 'atoms/container'
import { useTheme } from '@shopify/restyle'
import { Theme } from 'themes'

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (feedDetails: FeedItem) => void
  onItemSwipeLeft: (feedDetails: FeedItem, cancel: () => void) => void
}

const NoteList: React.FC<Props> = ({
  onScroll,
  contentInsetTop,
  onItemPress,
  onItemSwipeLeft
}) => {
  const Feed_Count = 20
  const { colors } = useTheme<Theme>()
  const [count, setCount] = useState(0)
  const [feedState, _] = useAtom(feedsAtom)
  const [visibleFeedItems, setVisibleFeedItems] = useState<FeedItem[]>([])
  const [loading, setLoading] = useState(true)
  const [feedItems, setFeedItems] = useState<FeedItem[]>([])
  const [offset, setOffset] = useState(Feed_Count)
  const [refreshing, setRefreshing] = useState(false)

  const loadMore = useCallback(() => {
    if (count > 0) {
      setVisibleFeedItems([
        ...visibleFeedItems,
        ...feedItems.slice(offset, offset + Feed_Count)
      ])
      setCount(count - Feed_Count)
      setOffset(offset + Feed_Count)
    }
  }, [count, visibleFeedItems, feedItems, offset])

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
            return parseRSS(xmlObjects, feedState.sortMode)
          })
        )
        .then(result => {
          setCount(result.length - Feed_Count)
          setFeedItems(result)
          setVisibleFeedItems(result.slice(0, Feed_Count))
          setRefreshing(false)
          setLoading(false)
        })
        .catch(error => {
          console.log(error)
          setRefreshing(false)
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

  console.log('rerendering note list')
  return (
    <StyledFlatList
      contentInsetAdjustmentBehavior="automatic"
      data={visibleFeedItems}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReached={loadMore}
      width="100%"
      onScroll={onScroll}
      scrollEventThrottle={16}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
      refreshControl={
        <RefreshControl
          colors={[colors.$badge]}
          progressBackgroundColor={colors.$sidebarBackground}
          onRefresh={() => {
            setRefreshing(true)
            getFeed()
          }}
          refreshing={refreshing}
        />
      }
    />
  )
}

export default NoteList
