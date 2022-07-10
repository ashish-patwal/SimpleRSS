import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import Container from 'atoms/container'
import { ScrollView } from 'react-native'
import { ProviderStackParamList } from 'types/types'
import MastHead from 'components/masthead'
import AnimatedBox from 'atoms/animated-box'
import Text from 'atoms/text'
import Badge from 'atoms/badge'
import Box from 'atoms/box'

type Props = NativeStackScreenProps<ProviderStackParamList, 'ProviderDetail'>

export default function ProviderDetailScreen({ navigation, route }: Props) {
  const {
    title,
    type,
    links,
    description,
    language,
    copyright,
    authors,
    lastUpdated,
    lastPublished,
    categories,
    image
  } = route.params.providerDetails

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container flexGrow={1}>
        <MastHead title="masthead" heightDivisor={2} imageUrl={image.url} />
        <AnimatedBox
          top={-20}
          px="sm"
          pt="sm"
          flex={1}
          flexDirection="column"
          backgroundColor="$background"
          borderTopLeftRadius="sm"
          borderTopRightRadius="sm"
        >
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
          <AnimatedBox flex={1} flexDirection="row" flexWrap="wrap">
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Title</Text>
                </Badge>
              </AnimatedBox>
              <Text>{title}</Text>
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Type</Text>
                </Badge>
              </AnimatedBox>
              <Text>{type}</Text>
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Links</Text>
                </Badge>
              </AnimatedBox>
              {links.map(link => {
                return (
                  <AnimatedBox
                    p="sm"
                    mt="xs"
                    borderRadius="sm"
                    backgroundColor="$background"
                  >
                    <Box flexDirection="row">
                      <Text fontWeight="900">Url :&nbsp;</Text>
                      <Text>{link.url}</Text>
                    </Box>
                    <Box flexDirection="row">
                      <Text fontWeight="900">Rel :&nbsp;</Text>
                      <Text>{link.rel}</Text>
                    </Box>
                  </AnimatedBox>
                )
              })}
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Authors</Text>
                </Badge>
              </AnimatedBox>
              <Text>
                {authors.map(author => (
                  <Text>{author.name}</Text>
                ))}
              </Text>
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Description</Text>
                </Badge>
              </AnimatedBox>
              <Text>{description}</Text>
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Language</Text>
                </Badge>
              </AnimatedBox>
              <Text>{language}</Text>
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Copyright</Text>
                </Badge>
              </AnimatedBox>
              <Text>{copyright}</Text>
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Last Updated</Text>
                </Badge>
              </AnimatedBox>
              <Text>{lastUpdated}</Text>
            </AnimatedBox>
            <AnimatedBox
              p="sm"
              mb="sm"
              mx="xs"
              flexGrow={1}
              borderRadius="sm"
              flexDirection="column"
              backgroundColor="$sidebarBackground"
            >
              <AnimatedBox flexDirection="row" justifyContent="flex-start">
                <Badge variant="category">
                  <Text fontWeight="900">Last Published</Text>
                </Badge>
              </AnimatedBox>
              <Text>{lastPublished}</Text>
            </AnimatedBox>
          </AnimatedBox>
        </AnimatedBox>
      </Container>
    </ScrollView>
  )
}
