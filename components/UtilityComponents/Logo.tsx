import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

const Logo = () => {
  return (
    <Box>
      <Typography component="h1" variant="h6">
        <Link href="/">
          <a>John Michael Asistio</a>
        </Link>
      </Typography>
    </Box>
  )
}

export default Logo
