import React from 'react'
import { ScrollView, View } from 'react-native'

const ScrollBox: React.FC<{ title?: string }> = ({ children }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} scrollEnabled={true}>
      <View>{children}</View>
    </ScrollView>
  )
}

export default ScrollBox
