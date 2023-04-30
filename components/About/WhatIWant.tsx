import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const sx: SxProps = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        maxWidth: 350
    }
}

const WhatIWant = () => {
    return (
        <Box sx={sx.root}>
            <TransitioningTypography text="Over the years that I've been studying" />
            <TransitioningTypography text="web development, I wonder how it feels" />
            <TransitioningTypography text="working with other people, learning and" />
            <TransitioningTypography text="sharing ideas. I want to experience new" />
            <TransitioningTypography text="things while learning and apply my skills" />
            <TransitioningTypography text="in real life. I want to develop my skills" />
            <TransitioningTypography text="along with other devs so that I can get" />
            <TransitioningTypography text="more experiences, ideas and inspiration" />
            <TransitioningTypography text="that I can put on to my works." />
        </Box>
    )
}

export default WhatIWant
