import { Box, Container, Pressable, Text, TextInput } from 'atoms'
import React, { useLayoutEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { DrawerScreenProps } from '@react-navigation/drawer'
import {
  FeedState,
  HomeDrawerParamList,
  ProviderBaseInfo,
  ProviderState
} from 'types/types'
import persistedFeedState from 'store/store'
import { useAtom } from 'jotai'
import shortid from 'shortid'

type Form = {
  url: string
}

type Props = DrawerScreenProps<HomeDrawerParamList, 'NewFeed'>

export default function NewFeed({ navigation }: Props) {
  const [feedState, setFeedState] = useAtom(persistedFeedState)
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Form>()

  const onSubmit = handleSubmit(data => {
    const latestProvider: ProviderBaseInfo = {
      id: shortid.generate(),
      url: data.url
    }
    const updatedFeedState: ProviderState = {
      providers: [latestProvider, ...feedState.providers],
      sortMode: feedState.sortMode
    }
    setFeedState(updatedFeedState)
    navigation.goBack()
  })

  return (
    <Container justifyContent="flex-start" alignItems="center">
      <Text variant="heading2" fontWeight="bold">
        URL
      </Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern:
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
        }}
        name="url"
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            margin="lg"
            padding="sm"
            textAlign="center"
            style={{ width: '90%' }}
            {...(errors.url
              ? { color: 'red', borderColor: 'red', borderWidth: 0.25 }
              : { borderWidth: 0.25 })}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.url?.type === 'pattern' && <Text></Text>}
      <Pressable
        backgroundColor="$primary"
        onPress={onSubmit}
        borderRadius="lg"
        p="sm"
      >
        <Text variant="heading2">Save</Text>
      </Pressable>
    </Container>
  )
}
