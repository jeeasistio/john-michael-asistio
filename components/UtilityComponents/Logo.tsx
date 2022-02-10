import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { SxProps } from '@mui/system'

const sx: SxProps = {
  root: {
    mixBlendMode: 'difference',
    zIndex: 'appBar',
    position: 'fixed',
    top: '5%',
    left: '5%'
  }
}

const Logo = () => {
  return (
    <Box sx={sx.root}>
      <Typography component="h1">
        <Link href="/about">
          <a>JOHN MICHAEL ASISTIO</a>
        </Link>
      </Typography>
    </Box>
  )
}

export default Logo
