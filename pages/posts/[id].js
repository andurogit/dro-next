import { getAllPostIds, getPostData } from '../../lib/postUtils'
import { Box } from '@chakra-ui/react'

const PostPage = ({ postData }) => {
  console.log('🚀 ~ file: [slug].js:4 ~ PostPage ~ postData:', postData)

  // const renderers = new rehypeReact({
  //   createElement: React.createElement
  // }).Compile
  {
    /* <ReactMarkDown
        // remarkHtml={[remarkHtml]}
        renderers={renderers}
        source={postData.processedContent}
        remarkReactComponents={{
          h1: props => <Box as={h1} fontSize="xl" {...props} />
        }}
      /> */
  }

  // return <Text dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  return (
    <Box p={4} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></Box>
  )
}

export default PostPage
// export async function getStaticProps({ params }) {
//   const postData = params

//   return {
//     props: {
//       postData
//     }
//   }
// }

/**
 * 말그대로 모든 정적 페이지의 Path 를 가져온다.
 * @returns
 */
export async function getStaticPaths() {
  const paths = getAllPostIds()

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return { props: { postData } }
}
