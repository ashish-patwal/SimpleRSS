import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  Home: {}
  Detail: {
    noteId: string
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
