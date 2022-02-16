import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { motion, useAnimation } from 'framer-motion'
import Link from 'next/link'
import { slideLeft } from '../../animations/slideLeft'
import { Work } from '../../lib/works'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
  root: {
    position: 'relative',
    overflow: 'hidden',
    alignSelf: 'flex-end',
    textAlign: 'right',
    pr: 2,
    pl: '5%',
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

interface Props {
  next: Work
}

const NextButton = ({ next }: Props) => {
  const hoverControls = useAnimation()

  const slideIn = () => {
    hoverControls.start('animate')
  }
  const slideOut = () => {
    hoverControls.start('initial')
  }

  return (
    <Box
      sx={sx.root}
      component={motion.div}
      onHoverStart={slideIn}
      onHoverEnd={slideOut}
      onTapStart={slideIn}
      onTapCancel={slideOut}
    >
      <Link href={`/work/${next.link}`}>
        <a>
          <Box
            sx={sx.overlay}
            component={motion.div}
            variants={slideLeft}
            initial="initial"
            animate={hoverControls}
          />

          <TransitioningTypography
            variant="h6"
            text="Next project"
            textStyle={{ color: 'grey.500' }}
          />
          <TransitioningTypography variant="h2" text={next.title} />
        </a>
      </Link>
    </Box>
  )
}

export default NextButton
