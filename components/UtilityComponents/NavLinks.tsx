import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import NavLink from './NavLink'

const sx: SxProps = {
    root: {
        display: 'inline-flex',
        flexDirection: 'column'
    }
}

const LINKS = ['ABOUT', 'WORKS', 'CONTACT']

const NavLinks = () => {
    return (
        <Box sx={sx.root}>
            {LINKS.map((link) => (
                <NavLink key={link} link={link} />
            ))}
        </Box>
    )
}

export default NavLinks
