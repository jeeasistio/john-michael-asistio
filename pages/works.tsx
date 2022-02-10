import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/UtilityComponents/Layout'
import WorksList from '../components/Works/WorksList'

const sx: SxProps = {
  root: {
    minHeight: '100vh'
  },
  worksCtn: {
    display: 'flex',
    position: 'relative'
  }
}

const Works: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Works</title>
      </Head>

      <Layout>
        <Box sx={sx.root}>
          <Box sx={sx.worksCtn}>
            <WorksList />
          </Box>
        </Box>
      </Layout>
    </div>
  )
}

export default Works
