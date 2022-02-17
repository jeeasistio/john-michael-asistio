import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll
} from 'framer-motion'
import Image from 'next/image'
import { parallaxTransition } from '../../utils/utils'

const sx: SxProps = {
  root: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  imageCtn: {}
}

interface Props {
  image: string
}

const CoverImage = ({ image }: Props) => {
  const { scrollYProgress } = useViewportScroll()
  const yValue = useTransform(scrollYProgress, [0, 0.5], [-100, -50])
  const y = useSpring(yValue, parallaxTransition())

  return (
    <Box sx={sx.root}>
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '200%',
          y
        }}
      >
        <Image
          src={image}
          alt="work"
          layout="fill"
          objectFit="cover"
          objectPosition="center bottom"
          priority
          quality={100}
        />
      </motion.div>
    </Box>
  )
}

export default CoverImage
