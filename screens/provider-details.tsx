import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Container from 'atoms/container'
import Text from 'atoms/text'
import { ScrollView } from 'react-native'
import { ProviderStackParamList } from 'types/types'

type Props = NativeStackScreenProps<ProviderStackParamList, 'ProviderDetail'>

export default function ProviderDetailScreen({ navigation, route }: Props) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container>
        <Text>Hello</Text>
      </Container>
    </ScrollView>
  )
}
