import { Box, LinkBox, Text, Tag, SimpleGrid, Badge } from '@chakra-ui/react'
import moment from 'moment/moment'

const Test = () => {
  const formattedDate = moment('2020-09-28 11:00:00 +0900').format(
    'YYYY년 MM월 DD일'
  )
  return (
    <SimpleGrid columns={[1, 2, 2]} gap={1} mb="20">
      <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
          <Text fontSize={14}>Linux Memory Checker (java)</Text>
          <Text fontSize={14}>{formattedDate}</Text>
        </LinkBox>
        <Badge fontSize={12} colorScheme="green" m="5">
          java
        </Badge>{' '}
        <br />
        <Tag size="sm" variant="solid" mr={3}>
          간단한
        </Tag>
        <Tag size="sm" variant="solid" mr={3}>
          joy
        </Tag>
      </Box>
      <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">Linux Memory Checker (java)</LinkBox>
        <Text fontSize={14}>2020-09-28 11:00:00 +0900</Text>
        <Text fontSize={12}>java</Text>
        <Tag size="sm" variant="solid" mr={3}>
          간단한
        </Tag>
        <Tag size="sm" variant="solid" mr={3}>
          joy
        </Tag>
      </Box>
    </SimpleGrid>
  )
}

export default Test
