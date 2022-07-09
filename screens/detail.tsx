import { Box, Container, Text, TouchableOpacity } from 'atoms'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useState } from 'react'
import { RootStackParamList } from 'types/types'
import MastHead from 'components/masthead'
import { Linking, ScrollView, StyleSheet } from 'react-native'
import FeatherIcon from 'components/icon'
import Badge from 'atoms/badge'
import HTMLView, {
  HTMLViewNode,
  HTMLViewNodeRenderer
} from 'react-native-htmlview'
import { useTheme } from '@shopify/restyle'
import { Theme } from 'themes'

type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>

export interface renderNode {
  node: HTMLViewNode
  index: number
  siblings: HTMLViewNode[]
  parent: HTMLViewNode
  defaultRenderer: HTMLViewNodeRenderer
}

export default function DetailScreen({ navigation, route }: Props) {
  const [imageUrl, setImageUrl] = useState<string | undefined | null>(
    route.params.feedDetails.imageUrl
  )
  console.log('refreshing details')
  const { title, content, description, published, categories, links } =
    route.params.feedDetails

  const xcontent = content ? trimmer(content) : description

  const { colors } = useTheme<Theme>()

  const handleRenderNode = useCallback(
    (node, index, siblings, parent, defaultRenderer) => {
      if (node.type == 'tag' && node.name == 'img') {
        setImageUrl(node.attribs.src)
        return null
      }
    },
    []
  )

  const handleBackButtonPress = useCallback(() => {
    navigation.goBack()
  }, [navigation])

  const handleUrlButtonPress = useCallback(async () => {
    const link = links[0]?.url

    const supported = link ? Linking.canOpenURL(link) : false

    if (supported && link) {
      await Linking.openURL(link)
    } else {
      console.log('Dont know how to open the url.')
    }
  }, [links])

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container flexGrow={1}>
        <MastHead title="image" heightDivisor={2} imageUrl={imageUrl} />
        <Box
          top={-20}
          p="lg"
          backgroundColor="$background"
          borderTopLeftRadius="sm"
          borderTopRightRadius="sm"
        >
          <Text variant="heading">{title}</Text>
          <Box
            p="sm"
            mb="sm"
            borderRadius="sm"
            flexDirection="row"
            backgroundColor="$sidebarBackground"
          >
            <Text style={{ flex: 1 }} variant="heading2">
              {new Date(published).toDateString()}&nbsp;at&nbsp;
              {new Date().toLocaleTimeString()}
            </Text>
            <Box flexDirection="column" justifyContent="flex-start">
              <Badge>
                <TouchableOpacity
                  rippleBorderless
                  onPress={handleUrlButtonPress}
                >
                  <FeatherIcon size={20} color="$foreground" name="at-sign" />
                </TouchableOpacity>
              </Badge>
            </Box>
          </Box>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Box mb="sm" flexDirection="row" justifyContent="space-between">
              {categories?.map(({ name }, key) => {
                if (name && name?.length > 0) {
                  return (
                    <Badge key={key} variant="category">
                      <Text>{name}</Text>
                    </Badge>
                  )
                }
              })}
            </Box>
          </ScrollView>
          <HTMLView
            renderNode={handleRenderNode}
            value={xcontent}
            stylesheet={styles}
            textComponentProps={{
              style: { color: colors.$foreground }
            }}
          />
        </Box>
      </Container>
      <Box
        borderRadius="md"
        backgroundColor="$background"
        position="absolute"
        top={10}
        left={10}
      >
        <TouchableOpacity
          m="xs"
          p="xs"
          rippleBorderless
          onPress={handleBackButtonPress}
        >
          <FeatherIcon size={20} color="$badge" name="chevron-left" />
        </TouchableOpacity>
      </Box>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  a: {
    fontWeight: '300',
    color: '#FF3366' // make links coloured pink
  }
})

const trimmer = (rawHTML: string): string => {
  let trimmedHTML: string = 'Not Available'
  if (rawHTML.length > 0) {
    trimmedHTML = rawHTML
      .replace(/^\s+|\s+$/g, '')
      .replace(/<\w+?><\/\w+?>/g, '')
      .replace(/\s{2,}?/g, '')
  }
  return trimmedHTML
}
