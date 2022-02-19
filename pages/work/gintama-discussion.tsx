import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/UtilityComponents/Layout'
import CoverImage from '../../components/Work/CoverImage'
import Description from '../../components/Work/Description'
import Images from '../../components/Work/Images'
import BottomNav from '../../components/Work/BottomNav'
import works, { Work } from '../../lib/works'
import { motion } from 'framer-motion'
import { staggerCtn } from '../../animations/slideUp'

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

const INDEX = 3
const WORK = works[INDEX]
const NEXTWORK = works[INDEX + 1]

const GintamaDiscussion: NextPage<Props> = () => {
  const { title, description, image } = WORK

  return (
    <div>
      <Head>
        <title>Gintama Discussion</title>
      </Head>

      <Layout>
        <Box
          sx={sx.root}
          component={motion.div}
          variants={staggerCtn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box sx={sx.coverCtn}>
            <CoverImage image={image} />
          </Box>

          <Box sx={sx.descCtn}>
            <Description title={title} description={description} />
          </Box>
          <Images images={[]} />
          <BottomNav next={NEXTWORK} />
        </Box>
      </Layout>
    </div>
  )
}

export default GintamaDiscussion
