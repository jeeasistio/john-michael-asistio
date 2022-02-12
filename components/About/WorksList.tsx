import Box from '@mui/material/Box'
import works from '../../lib/works'
import Work from './Work'

const WorksList = () => {
  return (
    <Box>
      {works.map((work) => (
        <Work key={work.title} {...work} />
      ))}
    </Box>
  )
}

export default WorksList
