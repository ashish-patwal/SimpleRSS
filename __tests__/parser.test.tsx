import axios from 'axios'
import parse from 'utility/parseFeed'
import { FeedItem } from 'rss-parserr/lib/types'
import { parserReturns } from 'types/types'

// it('should successfully fetch a rss object', ())

it('should test fetching of rss data', async () => {
  let feedItems: FeedItem[] = []
  let data: string[] = []
  try {
    data.push(
      await axios
        .get('https://anchor.fm/s/62d12970/podcast/rss')
        .then(response => {
          return response.data
        })
    )
    feedItems = await parse<FeedItem>(data, parserReturns.FeedItems)
  } catch (e) {
    console.log('error ' + e)
  }
  expect(feedItems.length).toBeGreaterThan(0)
})
