import { motion, useAnimation } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { slideUp } from '../../animations/slideUp'
import BlendingTypography from '../StyledComponents/BlendingTypography'

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
    backgroundColor: 'secondary.main'
  }
}

interface Props {
  link: string
}

const NavLink = ({ link }: Props) => {
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
          <BlendingTypography
            component={motion.h2}
            variants={slideUp}
            variant="h1"
          >
            {link}
          </BlendingTypography>
        </Box>
      </a>
    </Link>
  )
}

export default NavLink
