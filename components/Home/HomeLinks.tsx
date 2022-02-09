import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import HomeLink from './HomeLink'

const sx: SxProps = {
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    width: '100%'
  }
}

const LINKS = ['About', 'Work', 'Contact']

const HomeLinks = () => {
  return (
    <Box sx={sx.root}>
      {LINKS.map((link) => (
        <HomeLink key={link} link={link} />
      ))}
    </Box>
  )
}

export default HomeLinks
