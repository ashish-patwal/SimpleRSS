import React, { useCallback } from 'react'
import FeedList from 'components/feed-list'
import useStickyHeader from '_hooks/use-sticky-header'
import { CompositeScreenProps } from '@react-navigation/native'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { HomeDrawerParamList, ProviderStackParamList } from 'types/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Container from 'atoms/container'
import { Feed } from 'rss-parserr/lib/types'

type Props = CompositeScreenProps<
  DrawerScreenProps<HomeDrawerParamList, 'About'>,
  NativeStackScreenProps<ProviderStackParamList>
>

export default function ProviderScreen({ navigation }: Props) {
  const { handleScroll } = useStickyHeader()

  const handlePress = useCallback((providerDetails: Feed) => {
    navigation.navigate('ProviderDetail', { providerDetails })
  }, [])

  return (
    <Container px="sm" pb="sm" justifyContent="center" alignItems="center">
      <FeedList
        contentInsetTop={10}
        onScroll={handleScroll}
        onItemPress={handlePress}
      />
    </Container>
  )
}
