import React from 'react'
import { Container, Text } from 'atoms'
import FeedList from 'components/feed-list'
import useStickyHeader from '_hooks/use-sticky-header'

export default function AboutScreen() {
  const {
    handleNoteListLayout,
    handleScroll,
    headerBarStyle,
    headerBarHeight
  } = useStickyHeader()

  return (
    <Container justifyContent="center" alignItems="center">
      <FeedList
        contentInsetTop={headerBarHeight}
        onScroll={handleScroll}
        onItemPress={() => {
          console.log('item clicked')
        }}
      />
    </Container>
  )
}
