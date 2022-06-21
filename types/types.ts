import { NavigatorScreenParams } from '@react-navigation/native'

export type HomeDrawerParamList = {
  Main: {}
  About: {}
}

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>
  Detail: {
    noteId: string
  }
}

export type SortMode = 'asc' | 'desc'
