import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'

import workData from '../data/workData'
import WorkSection from '../components/workSection'

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          {workData.map((item, index) => {
            let delaypatch = index / 10
            return (
              <WorkSection key={index} item={item} delayTime={delaypatch} />
            )
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
