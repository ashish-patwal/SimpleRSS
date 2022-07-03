import { NavigatorScreenParams } from '@react-navigation/native'
import { FeedItem } from 'rss-parserr/lib/types'

export type RootStackParamList = {
  Home: {}
  Detail: {
    feedDetails: FeedItem
  }
}

export type HomeDrawerParamList = {
  Main: NavigatorScreenParams<RootStackParamList>
  About: {}
}

export type SortMode = 'asc' | 'desc'

export interface Feed {
  id: string
  title: string
  url: string
}

export interface FeedState {
  feeds: Feed[]
  sortMode: SortMode
}
