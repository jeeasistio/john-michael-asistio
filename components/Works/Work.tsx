import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion, useAnimation } from 'framer-motion'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { slideUp } from '../../animations/slideUp'
import { inTransition } from '../../utils/utils'
import { Work } from '../../lib/works'
import Link from 'next/link'

const sx: SxProps = {
  root: {},
  imageCtn: {
    height: '550px',
    width: '550px',
    position: 'relative',
    cursor: 'pointer'
  },
  imageInnerCtn: {
    width: '100%',
    height: '100%'
  },
  textCtn: {
    overflow: 'hidden'
  },
  underlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'secondary.main',
    display: 'flex',
    alignItems: 'flex-end',
    p: 2
  }
}

interface Props extends Work {}

const Work = ({ title, image, link }: Props) => {
  const hoverControls = useAnimation()
  const imageControls = useAnimation()
  const textControls = useAnimation()

  const handleHover = () => {
    hoverControls.start({ x: '12%', y: '12%', transition: inTransition() })
    imageControls.start({
      x: '-6%',
      y: '-6%',
      transition: inTransition()
    })
    textControls.start('animate')
  }
  const handleHoverLeave = () => {
    hoverControls.start({ x: '0%', y: '0%', transition: inTransition() })
    imageControls.start({
      x: '-0%',
      y: '-0%',
      transition: inTransition()
    })
    textControls.start('initial')
  }

  return (
    <Link href={`/work/${link}`} scroll={false}>
      <a>
        <Box
          sx={sx.root}
          component={motion.div}
          onHoverStart={handleHover}
          onHoverEnd={handleHoverLeave}
          onTapStart={handleHover}
          onTapCancel={handleHoverLeave}
        >
          <Box
            sx={sx.imageCtn}
            component={motion.div}
            initial={{ x: '-0%', y: '-0%' }}
            animate={imageControls}
          >
            <Box
              sx={sx.underlay}
              component={motion.div}
              initial={{ x: '0%', y: '0%' }}
              animate={hoverControls}
            >
              <Box sx={sx.textCtn}>
                <Typography
                  align="center"
                  color="primary"
                  variant="h4"
                  component={motion.h4}
                  variants={slideUp}
                  initial="initial"
                  animate={textControls}
                >
                  {title}
                </Typography>
              </Box>
            </Box>

            <Image
              src={image}
              alt="work"
              layout="fill"
              objectFit="cover"
              priority
              quality={100}
            />
          </Box>
        </Box>
      </a>
    </Link>
  )
}

export default Work
