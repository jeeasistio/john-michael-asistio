import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LetsCreate from './LetsCreate'
import ContactButton from './ContactButton'

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
    <Container sx={sx.root} maxWidth="lg">
      <Box>
        <LetsCreate />
      </Box>

      <Box>
        <ContactButton />
      </Box>
    </Container>
  )
}

export default Outro
