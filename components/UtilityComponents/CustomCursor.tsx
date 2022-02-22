import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import useCursor from '../../utils/useCursor'
import { inTransition, outTransition } from '../../utils/utils'

const cursorTransition = {
  type: 'spring',
  damping: 15,
  mass: 0.8,
  stiffness: 150,
  x: inTransition(),
  y: outTransition()
}

interface Props {
  componentRef: HTMLElement
}

const CustomCursor = ({ componentRef }: Props) => {
  const mouse = useMouse(componentRef, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 60
  })
  const { cursorVariant } = useCursor()

  let mouseXPosition = 0
  let mouseYPosition = 0

  if (mouse.x !== null) {
    mouseXPosition = mouse.x as number
  } else {
    mouseXPosition = -40
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.y as number
  } else {
    mouseYPosition = -40
  }

  return (
    <motion.div
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: '1200',
        mixBlendMode: 'difference',
        borderRadius: '50%',
        border: '2px solid #fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
      }}
      variants={{
        default: {
          x: mouseXPosition - 10,
          y: mouseYPosition - 10,
          width: 20,
          height: 20,
          transition: cursorTransition
        },
        hover: {
          x: mouseXPosition - 20,
          y: mouseYPosition - 20,
          width: 40,
          height: 40,
          padding: 5,
          transition: cursorTransition
        },
        tap: {
          x: mouseXPosition - 20,
          y: mouseYPosition - 20,
          width: 40,
          height: 40,
          padding: 5,
          transition: cursorTransition
        }
      }}
      animate={cursorVariant}
    >
      <motion.div
        style={{
          position: 'relative',
          borderRadius: 'inherit',
          backgroundColor: '#fff'
        }}
        variants={{
          default: {
            width: '110%',
            height: '110%',
            transition: cursorTransition
          },
          hover: {
            width: '40%',
            height: '40%',
            transition: cursorTransition
          },
          tap: {
            width: '40%',
            height: '40%',
            transition: cursorTransition
          }
        }}
        animate={cursorVariant}
      >
        <motion.div
          style={{
            position: 'absolute',
            borderRadius: 'inherit',
            backgroundColor: '#fff',
            top: 0,
            left: 0,
            opacity: 0.3,
            transform: 'translate(-50%, -50%)'
          }}
          variants={{
            tap: {
              width: '500%',
              height: '500%',
              transition: cursorTransition
            }
          }}
          animate={cursorVariant}
        />
      </motion.div>
    </motion.div>
  )
}

export default CustomCursor
