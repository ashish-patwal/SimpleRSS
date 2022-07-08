import React, { useCallback, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl
} from 'react-native'
import { feedsAtom } from 'states/feeds'
import { useAtom } from 'jotai'
import { Box, Container } from 'atoms'
import FeedListItem from './feed-list-item'
import { Feed } from 'rss-parserr/lib/types'
import axios from 'axios'
import { parserReturns } from 'types/types'
import { useTheme } from '@shopify/restyle'
import { Theme } from 'themes'
import parseRSS from 'utility/parseFeed'

const empty_card: Feed = {
  type: 'empty_card_type',
  title: 'empty_card_title',
  links: [],
  description: 'empty_card_description',
  language: null,
  copyright: null,
  authors: [],
  lastUpdated: 'empty_card_lastUpdated',
  lastPublished: 'empty_card_lastPublished',
  categories: [],
  image: {
    title: null,
    description: null,
    url: null,
    height: null,
    width: null
  },
  itunes: null,
  items: []
}

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (providerDetails: Feed) => void
}

const FeedList: React.FC<Props> = ({ contentInsetTop, onItemPress }) => {
  const { colors } = useTheme<Theme>()
  const [feedState, _] = useAtom(feedsAtom)
  const [feedDetailsList, setFeedDetailsList] = useState<Feed[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const NUM_COLUMNS = 2

  const getFeedProviderDetails = useCallback(() => {
    if (feedState.feeds.length > 0) {
      setLoading(true)
    }

    let providers: Array<string> = []
    for (let i = 0; i < feedState.feeds.length; i++) {
      providers.push(feedState.feeds[i].url)
    }
    providers = [...new Set(providers)]
    console.log('responses are sorted')

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
          console.log('parsing')
          return parseRSS<Feed>(
            xmlObjects,
            parserReturns.Feeds,
            feedState.sortMode
          )
        })
      )
      .then(result => {
        setFeedDetailsList(result)
        setRefreshing(false)
        console.log('set loading set to false')
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setRefreshing(false)
        setLoading(false)
      })
  }, [feedState])

  useEffect(() => {
    getFeedProviderDetails()
  }, [feedState, getFeedProviderDetails])

  const formatFeeds = useCallback(
    (feedsData: Feed[], columns: number) => {
      const totalRows = Math.floor(feedsData.length / columns)
      let totalLastRows = feedsData.length - totalRows * columns

      while (totalLastRows !== 0 && totalLastRows !== columns) {
        feedsData.push(empty_card)
        totalLastRows++
      }
      return feedsData
    },
    [feedState]
  )

  const renderItem = useCallback(({ item }) => {
    console.log('rendering item start')
    return (
      <FeedListItem numColumns={NUM_COLUMNS} {...item} onPress={onItemPress} />
    )
  }, [])

  if (loading) {
    return (
      <Container justifyContent="center" alignItems="center">
        <ActivityIndicator />
      </Container>
    )
  }

  return (
    <FlatList
      style={{ width: '100%' }}
      data={formatFeeds(feedDetailsList, NUM_COLUMNS)}
      keyExtractor={item => item.title}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
      renderItem={renderItem}
      numColumns={NUM_COLUMNS}
      refreshControl={
        <RefreshControl
          colors={[colors.$badge]}
          progressBackgroundColor={colors.$sidebarBackground}
          onRefresh={() => {
            setRefreshing(true)
            getFeedProviderDetails()
          }}
          refreshing={refreshing}
        />
      }
    />
  )
}

export default FeedList
