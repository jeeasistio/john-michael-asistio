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
    imgSrc: string | null
    cursorVariant: CursorVariant
    handleHover(): void
    handleLeave(): void
    handleTap(): void
    handleShowImg(src: string): void
    handleHideImg(): void
}

export const CursorContext = createContext<ICursorContext>({} as ICursorContext)

interface Props {
    children: ReactNode
}

export const CursorProvider = ({ children }: Props) => {
    const router = useRouter()
    const [imgSrc, setImgSrc] = useState<string | null>(null)
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

    const handleShowImg = (src: string) => {
        setImgSrc(src)
    }

    const handleHideImg = () => {
        setImgSrc(null)
    }

    useEffect(() => {
        router.events.on('routeChangeComplete', handleLeave)
        return () => {
            router.events.off('routeChangeComplete', handleLeave)
        }
    }, [router.events])

    return (
        <CursorContext.Provider
            value={{
                imgSrc,
                cursorVariant,
                handleHover,
                handleLeave,
                handleTap,
                handleShowImg,
                handleHideImg
            }}
        >
            {children}
        </CursorContext.Provider>
    )
}

const useCursor = () => useContext(CursorContext)

export default useCursor
