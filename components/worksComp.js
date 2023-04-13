import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Heading } from '@chakra-ui/react'

export const Title = ({ children }) => (
  <Box>
    <span>
      {' '}
      <ChevronRightIcon />{' '}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)
