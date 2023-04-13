import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { getSortedPostsData } from '../lib/postUtils'
import { PostItem } from '../components/post-item'

const Posts = ({ allPostsData }) => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {allPostsData.map(({ id, title, date, categories, tag }) => (
              <PostItem
                key={id}
                id={id}
                title={title}
                date={date}
                categories={categories}
                tags={tag}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts

// 이렇게 props 를 넘겨주면 Posts 컴포넌트에서 받아서 사용할 수 있다.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: { allPostsData }
  }
}
