import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LetsCreate from './LetsCreate'
import ContactButton from './ContactButton'
import SocialLinks from './SocialLinks'

const sx: SxProps = {
  root: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  }
}

const Outro = () => {
  return (
    <Box sx={sx.root}>
      <Box>
        <LetsCreate />
      </Box>

      <Box>
        <ContactButton />
      </Box>

      <Box>
        <SocialLinks />
      </Box>
    </Box>
  )
}

export default Outro
