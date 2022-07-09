import AnimatedBox from 'atoms/animated-box'
import Box from 'atoms/box'
import React from 'react'
import { Dimensions, Image } from 'react-native'
import { FadeIn, FadeOut } from 'react-native-reanimated'
import { Maybe } from 'rss-parserr/lib/types'

export interface Props {
  title: string
  heightDivisor: number
  imageUrl: Maybe<string>
}

const { height, width } = Dimensions.get('window')

const MastHead = ({ title, heightDivisor, imageUrl }: Props) => {
  return (
    <AnimatedBox backgroundColor="$foreground" entering={FadeOut}>
      <Image
        resizeMode="cover"
        source={imageUrl ? { uri: imageUrl } : require('images/blank3.jpeg')}
        style={{
          alignSelf: 'center',
          flex: 1,
          aspectRatio: 1,
          width: width,
          height: height / heightDivisor
        }}
      />
    </AnimatedBox>
  )
}

export default MastHead
