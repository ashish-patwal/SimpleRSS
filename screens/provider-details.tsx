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
  const providerDetails = route.params.providerDetails

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Container flexGrow={1}>
        <MastHead
          title="masthead"
          heightDivisor={2}
          imageUrl={providerDetails.image.url}
        />
        <AnimatedBox
          top={-20}
          px="sm"
          pt="lg"
          flex={1}
          flexWrap="wrap"
          flexDirection="row"
          backgroundColor="$background"
          borderTopLeftRadius="sm"
          borderTopRightRadius="sm"
        >
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
            <Text>{providerDetails.title}</Text>
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
            <Text>{providerDetails.type}</Text>
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
            {providerDetails.links.map(link => {
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
              {providerDetails.authors.map(author => (
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
            <Text>{providerDetails.description}</Text>
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
            <Text>{providerDetails.language}</Text>
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
            <Text>{providerDetails.copyright}</Text>
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
            <Text>{providerDetails.lastUpdated}</Text>
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
            <Text>{providerDetails.lastPublished}</Text>
          </AnimatedBox>
        </AnimatedBox>
      </Container>
    </ScrollView>
  )
}
