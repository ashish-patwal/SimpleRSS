import { atom } from 'jotai'
import { FeedState } from 'types/types'

export const feedsAtom = atom<FeedState>({
  feeds: [
    {
      id: '0',
      title: 'trashtaste',
      url: 'https://yenpress.com/feed/'
    },
    {
      id: '1',
      title: 'trashtaste',
      url: 'https://yenpress.com/feed/'
    },
    {
      id: '2',
      title: 'boi',
      url: 'https://yenpress.com/feed/'
    },
    {
      id: '3',
      title: 'thicc',
      url: 'https://yenpress.com/feed/'
    },
    {
      id: '4',
      title: 'karlson',
      url: 'https://yenpress.com/feed/'
    },
    {
      id: '5',
      title: 'very cool',
      url: 'https://yenpress.com/feed/'
    },
    {
      id: '6',
      title: 'peanut',
      url: 'https://www.101greatgoals.com/feed/'
    }
  ],
  sortMode: 'desc'
})
