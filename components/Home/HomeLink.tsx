import { motion, useAnimation } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Link from 'next/link'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  linkCtn: {
    py: 2,
    pl: 6,
    pr: 20,
    position: 'relative',
    overflow: 'hidden'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#465909'
  }
}

interface Props {
  link: string
}

const HomeLink = ({ link }: Props) => {
  const hoverControls = useAnimation()

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }

  return (
    <Link href={`/${link.toLowerCase()}`}>
      <a>
        <Box
          sx={sx.linkCtn}
          component={motion.div}
          onHoverStart={slideIn}
          onHoverEnd={slideOut}
          onTapStart={slideIn}
          onTapCancel={slideOut}
        >
          <Box
            sx={sx.overlay}
            component={motion.div}
            variants={slideRight}
            initial="initial"
            animate={hoverControls}
          />
          <TransitioningTypography blending={false} text={link} variant="h1" />
        </Box>
      </a>
    </Link>
  )
}

export default HomeLink
