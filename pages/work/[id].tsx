import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Layout from '../../components/UtilityComponents/Layout'
import CoverImage from '../../components/Work/CoverImage'
import Description from '../../components/Work/Description'
import BottomNav from '../../components/Work/BottomNav'
import works, { Work } from '../../lib/works'
import { motion } from 'framer-motion'
import { staggerCtn } from '../../animations/slideUp'
import WorkImage from '../../components/Work/WorkImage'

const sx: SxProps = {
    root: {
        minHeight: '100vh'
    },
    coverCtn: {
        height: '50vh',
        backgroundColor: 'secondary.main'
    },
    descCtn: {
        minHeight: '50vh',
        p: 4
    }
}

interface Props extends Work {
    next: Work
}

const Work: NextPage<Props> = ({
    title,
    description,
    image,
    images,
    online_link: onlineLink,
    next
}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>

            <Layout>
                <Box
                    sx={sx.root}
                    component={motion.div}
                    variants={staggerCtn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <Box sx={sx.coverCtn}>
                        <CoverImage image={image} />
                    </Box>

                    <Box sx={sx.descCtn}>
                        <Description
                            title={title}
                            description={description}
                            onlineLink={onlineLink}
                        />
                    </Box>
                    <Box>
                        {images.map((img, i) => (
                            <WorkImage key={i} src={img} />
                        ))}
                    </Box>
                    <BottomNav next={next} />
                </Box>
            </Layout>
        </div>
    )
}

export default Work

export const getStaticProps: GetStaticProps<{}> = async ({ params }) => {
    const index = works.findIndex((w) => w.link === params?.id)!
    const work = works[index]
    return {
        props: {
            ...work,
            next: works[(index + 1) % works.length]
        }
    }
}

export const getStaticPaths = async () => {
    return {
        paths: works.map((work) => ({ params: { id: work.link } })),
        fallback: false
    }
}
