import {
  Box,
  LinkBox,
  Tag,
  Badge,
  Text,
  useColorMode,
  LinkOverlay
} from '@chakra-ui/react'
import moment from 'moment/moment'

export const PostItem = ({ id, title, date, categories, tags }) => {
  const dateString = date.split(/\+|-/)[0].trim()
  const fommattedDate = moment(dateString).utc().format('YYYY년 MM월 DD일 ')
  const { colorMode } = useColorMode()

  const borderWidth = colorMode === 'dark' ? 2 : 1
  const borderColor = colorMode === 'dark' ? 'gray.600' : 'gray.300'

  // id 가 널인 경우 우측 아닌경우 왼쪽
  const href = (id && `/posts/${id}`) || `/posts`

  return (
    <Box
      w="100%"
      textAlign="center"
      borderWidth={borderWidth}
      borderColor={borderColor}
    >
      <LinkBox cursor="pointer" m="3">
        <LinkOverlay href={href}>
          <Text fontSize={14}>{title}</Text>
        </LinkOverlay>

        <Text fontSize={14}>{fommattedDate}</Text>
      </LinkBox>
      {Array.isArray(categories) &&
        categories.map(category => (
          <Badge
            fontSize={12}
            colorScheme="green"
            m="5"
            key={`${id}${category}`}
          >
            {category}
          </Badge>
        ))}{' '}
      <br />
      {Array.isArray(tags) &&
        tags.map(tag => (
          <Tag size="sm" variant="solid" m={3} key={`${id}${tag}`}>
            {tag}
          </Tag>
        ))}
    </Box>
  )
}
