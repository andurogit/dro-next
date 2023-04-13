import NextLink from 'next/link'
import {
  Container,
  Box,
  Button,
  Divider,
  Heading,
  Text
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found Page</Heading>
      <Text>페이지를 찾을 수 없습니다. </Text>
      <Divider my={6} />
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          집으로
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
