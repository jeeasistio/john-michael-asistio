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
    height: '600px',
    width: '600px',
    backgroundColor: 'success.main',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  imageInnerCtn: {
    width: '100%',
    height: '100%'
  },
  textCtn: {
    px: 2,
    overflow: 'hidden'
  }
}

const Work = () => {
  const zoomControls = useAnimation()
  const hoverControls = useAnimation()

  const handleHover = () => {
    hoverControls.start('animate')
    zoomControls.start({ scale: 1.1, transition: inTransition() })
  }
  const handleHoverLeave = () => {
    hoverControls.start('initial')
    zoomControls.start({ scale: 1, transition: inTransition() })
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
      <Box sx={sx.imageCtn}>
        <Box
          sx={sx.imageInnerCtn}
          component={motion.div}
          animate={zoomControls}
          initial={{ scale: 1 }}
        >
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

      <Box sx={sx.textCtn}>
        <Typography
          variant="h6"
          component={motion.h6}
          variants={slideUp}
          initial="initial"
          animate={hoverControls}
        >
          Shopy
        </Typography>
      </Box>
    </Box>
  )
}

export default Work
