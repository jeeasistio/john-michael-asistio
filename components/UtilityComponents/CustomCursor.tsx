import { motion } from 'framer-motion'
import useCursor from '../../utils/useCursor'
import { inTransition, outTransition } from '../../utils/utils'
import { Box } from '@mui/material'
import Image from 'next/image'
import useMouse from '../../utils/useMouse'
import works from '../../lib/works'

const cursorTransition = {
    x: inTransition(),
    y: outTransition(),
    default: { type: 'spring', damping: 15, mass: 0.8, stiffness: 150 }
}

const CustomCursor = () => {
    const mouse = useMouse()
    const { cursorVariant, imgSrc } = useCursor()

    let mouseXPosition = 0
    let mouseYPosition = 0

    if (mouse.x === null || mouse.y === null) return <></>
    mouseXPosition = mouse.x
    mouseYPosition = mouse.y

    return (
        <motion.div
            style={{
                position: 'fixed',
                pointerEvents: 'none',
                mixBlendMode: imgSrc === null ? 'difference' : 'normal',
                zIndex: '1200',
                borderRadius: '50%',
                border: '2px solid #fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
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
                    transition: cursorTransition
                }
            }}
            animate={cursorVariant}
        >
            {works.map((work) => (
                <Box
                    key={work.title}
                    sx={{
                        position: 'absolute',
                        bottom: -10,
                        right: -10,
                        width: 250,
                        height: 300,
                        pointerEvents: 'none',
                        display: imgSrc === work.image ? 'block' : 'none'
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: '100%'
                        }}
                    >
                        <Image
                            src={work.image}
                            alt="work"
                            layout="fill"
                            objectFit="cover"
                            priority
                            quality={100}
                        />
                    </Box>
                </Box>
            ))}

            <motion.div
                style={{
                    position: 'relative',
                    borderRadius: 'inherit',
                    backgroundColor: '#fff'
                }}
                variants={{
                    default: {
                        width: '100%',
                        height: '100%',
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
                        opacity: 0.3,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    variants={{
                        tap: {
                            width: '250%',
                            height: '250%',
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
