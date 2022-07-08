import Box from 'atoms/box'
import React from 'react'
import { Dimensions, Image } from 'react-native'
import { Maybe } from 'rss-parserr/lib/types'

export interface Props {
  title: string
  imageUrl: Maybe<string>
}

const { height, width } = Dimensions.get('window')

const MastHead = ({ title, imageUrl }: Props) => {
  return (
    <Box backgroundColor="$foreground">
      <Image
        resizeMode="cover"
        source={imageUrl ? { uri: imageUrl } : require('images/blank3.jpeg')}
        style={{
          alignSelf: 'center',
          flex: 1,
          aspectRatio: 1,
          width: width,
          height: height / 2
        }}
      />
    </Box>
  )
}

export default MastHead
