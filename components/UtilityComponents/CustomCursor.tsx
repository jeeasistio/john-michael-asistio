import useMouse from '@react-hook/mouse-position'
import { motion } from 'framer-motion'
import useCursor from '../../utils/useCursor'
import { inTransition, outTransition } from '../../utils/utils'

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
        zIndex: '1200'
      }}
      variants={{
        default: {
          mixBlendMode: 'difference',
          x: mouseXPosition - 10,
          y: mouseYPosition - 10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          border: '2px solid #fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: {
            x: inTransition(),
            y: inTransition()
          }
        },
        hover: {
          mixBlendMode: 'difference',
          x: mouseXPosition - 20,
          y: mouseYPosition - 20,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '2px solid #fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          transition: {
            x: outTransition(),
            y: outTransition()
          }
        },
        tap: {
          mixBlendMode: 'difference',
          x: mouseXPosition - 15,
          y: mouseYPosition - 15,
          width: 30,
          height: 30,
          borderRadius: '50%',
          border: '2px solid #fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transition: {
            x: outTransition(),
            y: outTransition()
          }
        }
      }}
      animate={cursorVariant}
    >
      <motion.div
        style={{}}
        variants={{
          default: {
            width: '110%',
            height: '110%',
            borderRadius: 'inherit',
            backgroundColor: '#fff',
            transition: {
              x: inTransition(),
              y: inTransition()
            }
          },
          hover: {
            width: '40%',
            height: '40%',
            borderRadius: 'inherit',
            backgroundColor: '#fff',
            transition: {
              x: outTransition(),
              y: outTransition()
            }
          },
          tap: {
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            backgroundColor: '#fff',
            transition: {
              x: outTransition(),
              y: outTransition()
            }
          }
        }}
        animate={cursorVariant}
      />
    </motion.div>
  )
}

export default CustomCursor
