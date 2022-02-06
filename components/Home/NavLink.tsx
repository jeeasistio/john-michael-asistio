import { motion, useAnimation } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import BlendingTypography from '../StyledComponents'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Link from 'next/link'

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
    background: 'linear-gradient(to right, #ffffff 70%, #000000)'
  }
}

interface Props {
  link: string
}

const NavLink = ({ link }: Props) => {
  const hoverControls = useAnimation()

  const slideIn = () => {
    hoverControls.start('in')
  }
  const slideOut = () => {
    hoverControls.start('out')
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
            initial="out"
            animate={hoverControls}
          />
          <BlendingTypography variant="h1">{link}</BlendingTypography>
        </Box>
      </a>
    </Link>
  )
}

export default NavLink
