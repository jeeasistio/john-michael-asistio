import { SxProps } from '@mui/material'
import { useAnimation, motion } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import Box from '@mui/material/Box'
import { slideUp } from '../../animations/slideUp'
import Link from 'next/link'
import BlendingTypography from '../StyledComponents/BlendingTypography'

const sx: SxProps = {
  root: {
    overflow: 'hidden',
    mixBlendMode: 'difference'
  },
  iconCtn: {
    border: 1,
    borderColor: 'secondary.main',
    py: '6px',
    px: 2,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: 'primary.main'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'secondary.main'
  },
  textStyle: {
    letterSpacing: 1.2
  }
}

const VisitButton = () => {
  const hoverControls = useAnimation()

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }

  return (
    <Link href="#" passHref>
      <a target="_blank">
        <Box
          sx={sx.root}
          component={motion.div}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Box
            sx={sx.iconCtn}
            component={motion.div}
            onHoverStart={slideIn}
            onHoverEnd={slideOut}
            onTapStart={slideIn}
            onTapCancel={slideOut}
            variants={slideUp}
          >
            <Box
              sx={sx.overlay}
              component={motion.div}
              variants={slideRight}
              initial="initial"
              animate={hoverControls}
            />

            <BlendingTypography sx={sx.textStyle} variant="button">
              Visit
            </BlendingTypography>
          </Box>
        </Box>
      </a>
    </Link>
  )
}

export default VisitButton
