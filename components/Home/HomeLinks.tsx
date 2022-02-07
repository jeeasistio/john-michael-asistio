import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import HomeLink from './HomeLink'

const sx: SxProps = {
  root: {
    display: 'inline-flex',
    flexDirection: 'column'
  }
}

const LINKS = ['ABOUT', 'WORK', 'CONTACT']

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
