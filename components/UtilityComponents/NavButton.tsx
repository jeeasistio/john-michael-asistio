import Box from '@mui/material/Box'
import { SxProps } from '@mui/system'
import { AnimatePresence } from 'framer-motion'
import CloseMenuButton from './CloseMenuButton'
import OpenMenuButton from './OpenMenuButton'

const sx: SxProps = {
    root: {
        mixBlendMode: 'difference',
        zIndex: 'appBar',
        overflow: 'hidden',
        position: 'fixed',
        top: '5%',
        right: '5%'
    }
}

interface Props {
    open: boolean
    handleClick(): void
}

const NavButton = ({ open, handleClick }: Props) => {
    return (
        <Box sx={sx.root}>
            <AnimatePresence exitBeforeEnter>
                {open && (
                    <CloseMenuButton handleClick={handleClick} key="open" />
                )}
                {!open && (
                    <OpenMenuButton handleClick={handleClick} key="close" />
                )}
            </AnimatePresence>
        </Box>
    )
}

export default NavButton
