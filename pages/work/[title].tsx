import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/UtilityComponents/Layout'
import CoverImage from '../../components/Work/CoverImage'
import Description from '../../components/Work/Description'
import Images from '../../components/Work/Images'
import BottomNav from '../../components/Work/BottomNav'
import works, { Work } from '../../lib/works'

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

interface Props extends Work {
  next: Work
}

const Work: NextPage<Props> = ({ title, image, description, next }) => {
  return (
    <div>
      <Head>
        <title>Work</title>
      </Head>

      <Layout>
        <Box sx={sx.root}>
          <Box sx={sx.coverCtn}>
            <CoverImage image={image} />
          </Box>

          <Box sx={sx.descCtn}>
            <Description title={title} description={description} />
          </Box>
          <Images images={[]} />
          <BottomNav next={next} />
        </Box>
      </Layout>
    </div>
  )
}

export default Work

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const work = works.find((work) => work.link === params?.title) as Work
  const next = works[work.index % 5]

  return {
    props: { ...work, next }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: works.map((work) => ({ params: { title: work.link } })),
    fallback: false
  }
}
