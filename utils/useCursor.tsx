import { useRouter } from 'next/router'
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState
} from 'react'

type CursorVariant = 'default' | 'hover' | 'tap'

interface ICursorContext {
    cursorVariant: CursorVariant
    handleHover(): void
    handleLeave(): void
    handleTap(): void
}

export const CursorContext = createContext<ICursorContext>({} as ICursorContext)

interface Props {
    children: ReactNode
}

export const CursorProvider = ({ children }: Props) => {
    const router = useRouter()
    const [cursorVariant, setCursorVariant] = useState<CursorVariant>('default')

    const handleHover = () => {
        setCursorVariant('hover')
    }

    const handleLeave = () => {
        setCursorVariant('default')
    }

    const handleTap = () => {
        setCursorVariant('tap')
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', handleLeave)
        return () => {
            router.events.off('routeChangeComplete', handleLeave)
        }
    }, [router.events])

    return (
        <CursorContext.Provider
            value={{ cursorVariant, handleHover, handleLeave, handleTap }}
        >
            {children}
        </CursorContext.Provider>
    )
}

const useCursor = () => useContext(CursorContext)

export default useCursor
