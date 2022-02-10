import { SxProps } from '@mui/system'
import Work from './Work'
import Box from '@mui/material/Box'
import { motion } from 'framer-motion'

const WORKS = [1, 2, 3, 4, 5]

const sx: SxProps = {
  workCtn: {
    width: { xs: '100vw', lg: '50vw' },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 5,
    p: 4
  }
}

const WorksList = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        height: '100vh',
        paddingTop: '96px'
      }}
    >
      {WORKS.map((work) => (
        <Box sx={sx.workCtn} key={work}>
          <Work />
        </Box>
      ))}
    </motion.div>
  )
}

export default WorksList
