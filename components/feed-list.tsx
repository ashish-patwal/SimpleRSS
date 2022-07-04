import React, { useCallback } from 'react'
import { Feed } from 'types/types'
import { FlatList, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { feedsAtom } from 'states/feeds'
import { useAtom } from 'jotai'
import { Box } from 'atoms'
import FeedListItem from './feed-list-item'

interface Props {
  contentInsetTop: number
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
  onItemPress: (feed: Feed) => void
}

const FeedList: React.FC<Props> = ({ contentInsetTop, onItemPress }) => {
  const [feeds, _] = useAtom(feedsAtom)
  const NUM_COLUMNS = 2

  const formatFeeds = useCallback(
    (feedsData: typeof feeds.feeds, columns: number) => {
      const totalRows = Math.floor(feedsData.length / columns)
      let totalLastRows = feedsData.length - totalRows * columns

      while (totalLastRows !== 0 && totalLastRows !== columns) {
        feedsData.push({ id: '-1', title: 'empty_card', url: '' })
        totalLastRows++
      }
      return feedsData
    },
    [feeds]
  )

  const renderItem = useCallback(({ item }) => {
    return (
      <FeedListItem numColumns={NUM_COLUMNS} {...item} onPress={onItemPress} />
    )
  }, [])

  return (
    <FlatList
      style={{ width: '100%' }}
      data={formatFeeds(feeds.feeds, NUM_COLUMNS)}
      keyExtractor={item => item.id}
      ListHeaderComponent={<Box width="100%" height={contentInsetTop} />}
      renderItem={renderItem}
      numColumns={NUM_COLUMNS}
    />
  )
}

export default FeedList
