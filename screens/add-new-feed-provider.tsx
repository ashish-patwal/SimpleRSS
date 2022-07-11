import { Box, Container, Pressable, Text, TextInput } from 'atoms'
import React, { useLayoutEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Theme } from 'themes'
import { useTheme } from '@shopify/restyle'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { HomeDrawerParamList } from 'types/types'
import { TouchableOpacity } from 'atoms/touchable'

type Form = {
  url: string
}

type Props = DrawerScreenProps<HomeDrawerParamList, 'NewFeed'>

export default function NewFeed({ navigation }: Props) {
  const theme = useTheme<Theme>()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<Form>()

  const onSubmit = handleSubmit(data => {
    console.log(data)
  })

  return (
    <Container justifyContent="flex-start" alignItems="center">
      <Text variant="heading2" {...(errors.url ? { color: 'red' } : null)}>
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
            style={{ width: '90%', textAlign: 'center' }}
            {...(errors.url
              ? { color: 'red', borderColor: 'red', borderWidth: 0.25 }
              : { borderWidth: 0.25 })}
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
            placeholder="Link"
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
