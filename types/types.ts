import { NavigatorScreenParams } from '@react-navigation/native'
import { Feed, FeedItem } from 'rss-parserr/lib/types'

export type RootStackParamList = {
  Home: {}
  Detail: {
    feedDetails: FeedItem
  }
}

export type ProviderStackParamList = {
  Providers: {}
  ProviderDetail: {
    providerDetails: Feed
  }
}

export type HomeDrawerParamList = {
  Main: NavigatorScreenParams<RootStackParamList>
  Provider: NavigatorScreenParams<ProviderStackParamList>
}

export type SortMode = 'asc' | 'desc'

export interface FeedBaseInfo {
  id: string
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
