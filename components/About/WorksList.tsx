import Box from '@mui/material/Box'
import Work from './Work'

const WORKS = [1, 2, 3, 4, 5]

const WorksList = () => {
  return (
    <Box>
      {WORKS.map((work) => (
        <Work key={work} />
      ))}
    </Box>
  )
}

export default WorksList
