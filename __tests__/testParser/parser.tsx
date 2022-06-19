import axios from 'axios'
import parse from 'utility/parseFeed'
import { FeedItem } from 'rss-parserr/lib/types'

it('should test length of rss items', async () => {
  let feedItems: FeedItem[] = []
  axios
    .get('https://anchor.fm/s/62d12970/podcast/rss')
    .then(async response => {
      feedItems = await parse(response.data)
    })
    .catch(e => {
      console.log('Error ' + e)
    })

  await expect(feedItems.length).toBeLessThan(40)
})
