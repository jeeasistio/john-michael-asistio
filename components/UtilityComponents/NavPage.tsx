import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { slideDown } from '../../animations/slideDown'
import PhoneNumber from '../Contact/PhoneNumber'
import SocialLinks from '../Contact/SocialLinks'
import NavLinks from '../Home/NavLinks'

const sx: SxProps = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    minWidth: '100vw',
    minHeight: '100vh',
    zIndex: 'speedDial',
    display: 'flex',
    backgroundColor: 'primary.main'
  },
  navImageCtn: {
    width: '30%',
    backgroundColor: 'success.main'
  },
  navLinksCtn: {
    pt: 'calc(10vh + 24px)',
    display: 'flex',
    flexDirection: 'column'
  },
  underlay: {
    background: 'info.main'
  }
}

const NavPage = () => {
  return (
    <Box
      sx={sx.root}
      component={motion.div}
      variants={slideDown}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Box sx={sx.navImageCtn}></Box>

      <Box sx={sx.navLinksCtn}>
        <Box>
          <NavLinks />
        </Box>

        <Box>
          <PhoneNumber />
          <SocialLinks />
        </Box>
      </Box>
    </Box>
  )
}

export default NavPage
