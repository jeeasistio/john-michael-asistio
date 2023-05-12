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

const WhatIDo = () => {
    return (
        <Box sx={sx.root}>
            <TransitioningTypography text="I usually do frontend works with a few" />
            <TransitioningTypography text="backend. I prefer doing frontend because" />
            <TransitioningTypography text="I enjoy looking at the works I do even" />
            <TransitioningTypography text="though they're not visually appealing." />
            <TransitioningTypography text="I want to explore backend development to" />
            <TransitioningTypography text="develop my skills on that part. I mostly" />
            <TransitioningTypography text="used Next JS and Material UI as my" />
            <TransitioningTypography text="frameworks on making projects." />
        </Box>
    )
}

export default WhatIDo
