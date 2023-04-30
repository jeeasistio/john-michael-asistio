import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { SxProps } from '@mui/system'
import { useRouter } from 'next/router'
import useCursor from '../../utils/useCursor'
import { motion } from 'framer-motion'

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
    const router = useRouter()
    const { handleHover, handleLeave, handleTap } = useCursor()

    if (router.pathname === '/works') return null

    return (
        <Box
            sx={sx.root}
            component={motion.div}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onTapStart={handleTap}
            onTapCancel={handleLeave}
        >
            <Typography component="h1">
                <Link href="/about" scroll={false}>
                    <a>JOHN MICHAEL ASISTIO</a>
                </Link>
            </Typography>
        </Box>
    )
}

export default Logo
