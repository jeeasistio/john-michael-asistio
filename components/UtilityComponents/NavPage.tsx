import { SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { slideDown } from '../../animations/slideDown'
import PhoneNumber from '../Contact/PhoneNumber'
import SocialLinks from '../Contact/SocialLinks'
import NavImage from './NavImage'
import NavLinks from './NavLinks'

const sx: SxProps = {
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        minHeight: '100vh',
        zIndex: 'speedDial',
        display: 'flex',
        backgroundColor: 'primary.main'
    },
    navImageCtn: {
        width: '30%',
        position: 'relative',
        backgroundColor: 'secondary.main',
        display: { xs: 'none', md: 'block' }
    },
    navContentCtn: {
        py: 'calc(10vh + 16px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    navLinksCtn: {},
    contactCtn: {
        display: 'flex',
        flexDirection: 'column',
        p: 4,
        gap: 2
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
            <Box sx={sx.navImageCtn}>
                <NavImage />
            </Box>

            <Box sx={sx.navContentCtn}>
                <Box sx={sx.navLinksCtn}>
                    <NavLinks />
                </Box>

                <Box sx={sx.contactCtn}>
                    <PhoneNumber />
                    <SocialLinks />
                </Box>
            </Box>
        </Box>
    )
}

export default NavPage
