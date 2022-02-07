import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Head from 'next/head'
import NavLinks from '../components/Home/NavLinks'
import Layout from '../components/UtilityComponents/Layout'
import ProfileImage from '../components/Home/ProfileImage'
import { motion } from 'framer-motion'
import { staggerCtn } from '../animations/slideUp'

const sx: SxProps = {
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'space-between'
  },
  navLinksCtn: {
    display: 'flex',
    alignItems: 'flex-end',
    py: 8
  },
  profileImageCtn: {
    width: '40%',
    backgroundColor: 'error.main'
  }
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Box
          sx={sx.root}
          component={motion.div}
          variants={staggerCtn}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Box sx={sx.navLinksCtn}>
            <NavLinks />
          </Box>

          <Box sx={sx.profileImageCtn}>
            <ProfileImage />
          </Box>
        </Box>
      </Layout>
    </div>
  )
}

export default Home
