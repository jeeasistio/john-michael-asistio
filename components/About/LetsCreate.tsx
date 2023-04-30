import Box from '@mui/material/Box'
import TransitioningTypography from '../UtilityComponents/TransitioningTypography'

const LetsCreate = () => {
    return (
        <Box>
            <TransitioningTypography
                text="Let's create"
                variant="h2"
                textStyle={{
                    textAlign: 'center',
                    color: 'secondary.contrastText'
                }}
            />
            <TransitioningTypography
                text="something new"
                variant="h2"
                textStyle={{
                    textAlign: 'center',
                    color: 'secondary.contrastText'
                }}
            />
            <TransitioningTypography
                text="together!"
                variant="h2"
                textStyle={{
                    textAlign: 'center',
                    color: 'secondary.contrastText'
                }}
            />
        </Box>
    )
}

export default LetsCreate
