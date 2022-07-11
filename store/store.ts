import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ProviderState } from 'types/types'

const storage = createJSONStorage<ProviderState>(() => AsyncStorage)
const providerState: ProviderState = {
  providers: [],
  sortMode: 'desc'
}

const persistedFeedState = atomWithStorage<ProviderState>(
  'providerstate',
  providerState,
  storage
)
export default persistedFeedState
