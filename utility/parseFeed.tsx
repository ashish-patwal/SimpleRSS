import { Feed, FeedItem } from 'rss-parserr/lib/types'
import { parse } from 'rss-parserr'
import { parserReturns, SortMode } from 'types/types'

export default async function parseRSS<T extends Feed | FeedItem>(
  rssObjects: string[],
  returnType: parserReturns,
  sortmode?: SortMode,
  filter?: 'today'
): Promise<T[]> {
  let feeds: Feed[] = []
  let feedItems: FeedItem[] = []
  rssObjects = [...new Set(rssObjects)]

  for (let i = 0; i < rssObjects.length; i++) {
    let rss = rssObjects[i]

    try {
      const parseFeeds = await parse(rss)
      feedItems = [...parseFeeds.items, ...feedItems]
      feeds.push(parseFeeds)
    } catch (e) {
      console.log('Failed to parse feed. Error: ' + e)
    }
  }

  feedItems.sort((a, b) => {
    if (a.published && b.published) {
      let date_a = new Date(a.published)
      let date_b = new Date(b.published)

      return sortmode === 'asc'
        ? date_a.getTime() - date_b.getTime()
        : date_b.getTime() - date_a.getTime()
    }
    return 0
  })

  if (filter) {
    feedItems = applyFilter(filter, feedItems)
  }

  if (returnType === parserReturns.Feeds) {
    return feeds
  } else {
    return feedItems
  }
}

function applyFilter(filter: string, feedItems: FeedItem[]) {
  if (filter == 'today') {
    const startOfTodayinMillis = new Date(
      new Date().setHours(0, 0, 0, 0)
    ).getTime()

    return feedItems.filter(feedItem => {
      if (feedItem.published) {
        let feedItemTimeinMillis = new Date(feedItem.published).getTime()
        return feedItemTimeinMillis - startOfTodayinMillis >= 0
      }
    })
  }
  return feedItems
}
