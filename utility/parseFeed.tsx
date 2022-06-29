import { FeedItem } from 'rss-parserr/lib/types'
import { parse } from 'rss-parserr'
import { SortMode } from 'types/types'

export default async function parseRSS(
  rssObjects: string[],
  sortmode?: SortMode,
  filter?: 'today'
) {
  let notes: FeedItem[] = []

  for (let i = 0; i < rssObjects.length; i++) {
    let rss = rssObjects[i]

    try {
      const result = await parse(rss)

      let items = result.items
      const len = items.length

      for (let j = 0; j < len; j++) {
        let item = items[j]

        notes.push(item)
      }
    } catch (e) {
      console.log('Failed to parse feed. Error: ' + e)
    }
  }

  notes.sort((a, b) => {
    if (a.published && b.published) {
      let date_a = new Date(a.published)
      let date_b = new Date(b.published)

      return sortmode === 'asc'
        ? date_a.getTime() - date_b.getTime()
        : date_b.getTime() - date_a.getTime()
    }
    return 0
  })

  return notes

  if (filter) {
    notes = applyFilter(filter, notes)
  }

  return notes
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
