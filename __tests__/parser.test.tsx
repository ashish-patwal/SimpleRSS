import axios from 'axios'
import parse from 'utility/parseFeed'
import { FeedItem } from 'rss-parserr/lib/types'

// it('should successfully fetch a rss object', ())

it('should test fetching of rss data', async () => {
  let feedItems: FeedItem[] = []
  let data: string[] = []
  try {
    data.push(
      await axios
        .get('https://anchor.fm/s/62d12970/podcast/rss')
        .then(response => {
          console.log(response)
          return response.data
        })
    )
    feedItems = await parse(data)
    console.log('length of feedItems is : ' + feedItems.length)
  } catch (e) {
    console.log('error ' + e)
  }
  expect(feedItems.length).toBeGreaterThan(0)
})
