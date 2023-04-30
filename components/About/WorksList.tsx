import Box from '@mui/material/Box'
import works from '../../lib/works'
import Work from './Work'

const WorksList = () => {
    return (
        <Box>
            {works.map((work, index) => (
                <Work key={work.title} {...work} index={index} />
            ))}
        </Box>
    )
}

export default WorksList
