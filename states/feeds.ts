import { atom } from 'jotai'
import { FeedState } from 'types/types'

export const feedsAtom = atom<FeedState>({
  feeds: [
    {
      id: '0',
      title: 'trashtaste',
      url: 'https://anchor.fm/s/62d12970/podcast/rss'
    }
  ],
  sortMode: 'desc'
})
