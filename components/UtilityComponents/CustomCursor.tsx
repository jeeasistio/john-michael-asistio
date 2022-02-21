import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import { useState } from 'react'

const CustomCursor = ({ componentRef }) => {
  const [cursorVariant, setCursorVariant] = useState('default')
  const mouse = useMouse(componentRef, {})

  const handleHover = () => {
    setCursorVariant('hover')
  }

  const handleLeave = () => {
    setCursorVariant('default')
  }

  return (
    <motion.div
      style={{}}
      variants={{
        default: {
          mixBlendMode: 'difference',
          x: mouse?.x,
          y: mouse?.y,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '2px solid #fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        hover: {
          mixBlendMode: 'difference',
          x: mouse?.x,
          y: mouse?.y,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '2px solid #fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5
        }
      }}
      animate={cursorVariant}
    >
      <motion.div
        style={{}}
        variants={{
          default: {
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            backgroundColor: '#fff'
          },
          hover: {
            width: '40%',
            height: '40%',
            borderRadius: 'inherit',
            backgroundColor: '#fff'
          }
        }}
        animate={cursorVariant}
      />
    </motion.div>
  )
}

export default CustomCursor
