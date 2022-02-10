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
    border: 0.5,
    py: '6px',
    px: 2,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'secondary.main'
  }
}

const ContactButton = () => {
  const hoverControls = useAnimation()

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }

  return (
    <Box sx={sx.root}>
      <Link href="/contact">
        <a>
          <Box
            sx={sx.iconCtn}
            component={motion.div}
            onHoverStart={slideIn}
            onHoverEnd={slideOut}
            onTapStart={slideIn}
            onTapCancel={slideOut}
            variants={slideUp}
            initial="initial"
            whileInView="animate"
            viewport={{ margin: '-20%', once: true }}
          >
            <Box
              sx={sx.overlay}
              component={motion.div}
              variants={slideRight}
              initial="initial"
              animate={hoverControls}
            />

            <BlendingTypography variant="button">Contact</BlendingTypography>
          </Box>
        </a>
      </Link>
    </Box>
  )
}

export default ContactButton
