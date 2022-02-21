import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { slideRight } from '../../animations/slideRight'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Link from 'next/link'
import TransitioningTypography from './TransitioningTypography'
import { useRouter } from 'next/router'

const sx: SxProps = {
  linkCtn: {
    py: 2,
    pl: { xs: 2, md: 6 },
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
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 3,
    backgroundColor: 'secondary.main'
  }
}

interface Props {
  link: string
}

const NavLink = ({ link }: Props) => {
  const router = useRouter()
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

          <TransitioningTypography text={link} variant="h1" />

          {router.pathname === `/${link.toLowerCase()}` && (
            <Box
              key={router.pathname}
              sx={sx.underline}
              component={motion.div}
              variants={slideRight}
            />
          )}
        </Box>
      </a>
    </Link>
  )
}

export default NavLink
