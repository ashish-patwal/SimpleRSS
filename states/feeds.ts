import { atom } from 'jotai'
import { FeedState } from 'types/types'

export const feedsAtom = atom<FeedState>({
  feeds: [
    {
      id: '0',
      url: 'https://yenpress.com/feed/'
    }
  ],
  sortMode: 'desc'
})

const others = [
  {
    id: '2',
    url: 'https://feeds.sbs.com.au/anime-show-joey-akidearest'
  },
  {
    id: '6',
    url: 'https://www.101greatgoals.com/feed/'
  },
  {
    id: '1',
    url: 'https://honeysanime.com/feed/'
  },
  {
    id: '3',
    url: 'http://otakuspirit.com/feed/'
  },
  {
    id: '5',
    url: 'https://feeds.soundcloud.com/users/soundcloud:users:187841578/sounds.rss'
  },
  {
    id: '7',
    url: 'https://rss.art19.com/apology-line'
  },
  {
    id: '8',
    url: 'https://feeds.simplecast.com/qm_9xx0g'
  }
]
