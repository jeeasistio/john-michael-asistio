import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion, useAnimation } from 'framer-motion'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { slideUp } from '../../animations/slideUp'
import { inTransition } from '../../utils/utils'

const sx: SxProps = {
  root: {},
  imageCtn: {
    height: '550px',
    width: '550px',
    backgroundColor: 'success.main',
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

const Work = () => {
  const hoverControls = useAnimation()
  const imageControls = useAnimation()
  const textControls = useAnimation()

  const handleHover = () => {
    hoverControls.start({ x: '12%', y: '12%', transition: inTransition() })
    imageControls.start({ x: '-8%', y: '-8%', transition: inTransition() })
    textControls.start('animate')
  }
  const handleHoverLeave = () => {
    hoverControls.start({ x: '4%', y: '4%', transition: inTransition() })
    imageControls.start({ x: '-4%', y: '-4%', transition: inTransition() })
    textControls.start('initial')
  }

  return (
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
        initial={{ x: '-4%', y: '-4%' }}
        animate={imageControls}
      >
        <Box
          sx={sx.underlay}
          component={motion.div}
          initial={{ x: '4%', y: '4%' }}
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
              Shopy
            </Typography>
          </Box>
        </Box>

        <Image
          className="work-image"
          src="/save_mother_earth.jpg"
          alt="work"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
      </Box>
    </Box>
  )
}

export default Work
