import Head from 'next/head'
import Navbar from '../navBar'
import dynamic from 'next/dynamic'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import MascotLoader from '../mascot-loader'

// mascot 콜
// ssr 사용안함
const LazyMascot = dynamic(() => import('../mascot'), {
  ssr: false,
  loading: () => <MascotLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Dro's homepage" />
        <meta name="author" content="Dro" />
        <meta name="author" content="meda" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <meta name="twitter:title" content="Takuya Matsuyama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" /> */}
        <meta property="og:site_name" content="Dro" />
        <meta name="og:title" content="Dro" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="https://www.craftz.dog/card.png" /> */}
        <title>Dro - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyMascot />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
