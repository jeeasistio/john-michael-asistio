import { useEffect, useState } from 'react'

function getWindowDimensions() {
    const dimensions = { height: 0, width: 0 }
    if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window
        dimensions.height = height
        dimensions.width = width
    }
    return dimensions
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}
