import Head from 'next/head'
import Layout from '../components/UtilityComponents/Layout'
import Box from '@mui/material/Box'
import Intro from '../components/About/Intro'
import Dos from '../components/About/Dos'
import Wants from '../components/About/Wants'
import Outro from '../components/About/Outro'
import { SxProps } from '@mui/material'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import { inTransition } from '../utils/utils'

const sx: SxProps = {
  aboutCtn: {
    position: 'relative'
  }
}

const About = () => {
  const { scrollYProgress } = useViewportScroll()
  const opacityValue = useTransform(scrollYProgress, [0.75, 0.8], [0, 1])
  const opacity = useSpring(opacityValue, inTransition())

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Layout>
        <Box sx={sx.aboutCtn}>
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: '#fff',
              opacity: opacity
            }}
          />
          <Box>
            <Intro />
          </Box>

          <Dos />
          <Wants />
          <Outro />
        </Box>
      </Layout>
    </div>
  )
}

export default About
