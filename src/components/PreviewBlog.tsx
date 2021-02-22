import { Box, Container, Heading, Text, Stack, HStack, VStack, Flex, Divider } from '@chakra-ui/react'
import { Post } from '../interfaces/Post'

export default function PreviewBlog({ posts }: any) {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Latest posts</Heading>
      </Stack>

      
      <Flex spacing={10} mb={5}>
        {posts.length && posts.map(({ id, title, content, updatedAt } :Post) => (
          <HStack key={id}>
            <VStack align={'start'}>
              <Text fontWeight={600}>{title}</Text>
              <Text>{updatedAt}</Text>
              <Text>{content.substring(0, 230)}...</Text>
            </VStack>
          </HStack>
        ))}
      </Flex>
    </Box>
  )
}