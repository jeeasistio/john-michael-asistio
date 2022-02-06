import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Head from 'next/head'
import NavLinks from '../components/Home/NavLinks'
import Layout from '../components/UtilityComponents/Layout'
import ProfileImage from '../components/Home/ProfileImage'

const sx: SxProps = {
  root: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'space-between'
  },
  navLinksCtn: {
    display: 'flex',
    alignItems: 'flex-end',
    py: 8
  }
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <Layout>
        <Box sx={sx.root}>
          <Box sx={sx.navLinksCtn}>
            <NavLinks />
          </Box>

          <Box>
            <ProfileImage />
          </Box>
        </Box>
      </Layout>
    </div>
  )
}

export default Home
