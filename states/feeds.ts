import { atom } from 'jotai'
import { Feed } from 'types/types'

export const feeds = atom<Feed[]>([])
