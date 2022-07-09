import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Container from 'atoms/container'
import Text from 'atoms/text'
import { ScrollView } from 'react-native'
import { ProviderStackParamList } from 'types/types'
import MastHead from 'components/masthead'
import Box from 'atoms/box'

type Props = NativeStackScreenProps<ProviderStackParamList, 'ProviderDetail'>

export default function ProviderDetailScreen({ navigation, route }: Props) {
  const { image } = route.params.providerDetails

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container flexGrow={1}>
        <MastHead title="masthead" heightDivisor={2} imageUrl={image.url} />
        <Box
          top={-20}
          p="lg"
          backgroundColor="$background"
          borderTopLeftRadius="sm"
          borderTopRightRadius="sm"
        >
          <Text>Hello</Text>
        </Box>
      </Container>
    </ScrollView>
  )
}
