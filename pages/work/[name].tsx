import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/UtilityComponents/Layout'
import CoverImage from '../../components/Work/CoverImage'
import Description from '../../components/Work/Description'
import Images from '../../components/Work/Images'
import BottomNav from '../../components/Work/BottomNav'

const sx: SxProps = {
  root: {
    minHeight: '100vh'
  },
  coverCtn: {
    height: '50vh',
    backgroundColor: 'secondary.main'
  },
  descCtn: {
    minHeight: '50vh',
    p: 4
  }
}

const Work: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>

      <Layout>
        <Box sx={sx.root}>
          <Box sx={sx.coverCtn}>
            <CoverImage />
          </Box>

          <Box sx={sx.descCtn}>
            <Description />
          </Box>
          <Images />
          <BottomNav />
        </Box>
      </Layout>
    </div>
  )
}

export default Work
