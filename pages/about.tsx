import Head from 'next/head'
import Layout from '../components/UtilityComponents/Layout'
import Box from '@mui/material/Box'
import Intro from '../components/About/Intro'
import Dos from '../components/About/Dos'
import Wants from '../components/About/Wants'
import Outro from '../components/About/Outro'

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Layout>
        <Box>
          <Intro />
        </Box>

        <Box sx={{ mixBlendMode: 'difference' }}>
          <Dos />
          <Wants />
          <Outro />
        </Box>
      </Layout>
    </div>
  )
}

export default About
