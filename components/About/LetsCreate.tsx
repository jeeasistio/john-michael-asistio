import Box from '@mui/material/Box'
import BlendingTypography from '../StyledComponents/BlendingTypography'
import { motion } from 'framer-motion'
import { slideUp, staggerCtn } from '../../animations/slideUp'
import { SxProps } from '@mui/system'

const sx: SxProps = {
  textCtn: {
    overflow: 'hidden'
  }
}

const LetsCreate = () => {
  return (
    <Box
      component={motion.div}
      variants={staggerCtn}
      initial="initial"
      whileInView="animate"
      viewport={{ margin: '-50%', once: true }}
    >
      <Box sx={sx.textCtn}>
        <BlendingTypography
          variant="h2"
          component={motion.h2}
          variants={slideUp}
          align="center"
        >
          Let&apos;s create
        </BlendingTypography>
      </Box>

      <Box sx={sx.textCtn}>
        <BlendingTypography
          sx={sx.textCtn}
          variant="h2"
          component={motion.h2}
          variants={slideUp}
          align="center"
        >
          something new
        </BlendingTypography>
      </Box>

      <Box sx={sx.textCtn}>
        <BlendingTypography
          sx={sx.textCtn}
          variant="h2"
          component={motion.h2}
          variants={slideUp}
          align="center"
        >
          together!
        </BlendingTypography>
      </Box>
    </Box>
  )
}

export default LetsCreate
