import Section from '../components/section'
import {
  Container,
  ListItem,
  UnorderedList,
  Tag,
  HStack
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Title } from '../components/worksComp'
import P from '../components/paragraph'
import { skillBadges } from '../components/skillBadges'

// WorkSection Component
const WorkSection = (item, delayTime) => {
  const { title, year, desc, itemList, badges } = item.item
  return (
    <Section delay={Number(delayTime)}>
      <Layout>
        <Container>
          <Title>
            {title} <Tag>{year}</Tag>
          </Title>

          <P>{desc}</P>

          <UnorderedList ml={4} my={4}>
            {itemList.map(detail => {
              return <ListItem>{detail}</ListItem>
            })}
          </UnorderedList>
          <HStack>
            {badges.map((key, index) => (
              <div key={index}>{skillBadges[key]}</div>
            ))}
          </HStack>
        </Container>
      </Layout>
    </Section>
  )
}

export default WorkSection
