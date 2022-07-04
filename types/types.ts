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

export interface FeedBaseInfo {
  id: string
  title: string
  url: string
}

export interface FeedState {
  feeds: FeedBaseInfo[]
  sortMode: SortMode
}

export enum parserReturns {
  Feeds = 'Feeds',
  FeedItems = 'FeedItems'
}
