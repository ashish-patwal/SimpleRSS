import { Container, Text, TouchableOpacity } from 'atoms'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { RootStackParamList } from 'types/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>

export default function DetailScreen({ navigation, route }: Props) {
  return (
    <Container alignItems="center" justifyContent="center">
      <Text>Detail Screen</Text>
      <Text m="lg">{JSON.stringify(route.params)}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ padding: 12 }}
      >
        <Text>Go Back</Text>
      </TouchableOpacity>
    </Container>
  )
}
