import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/UtilityComponents/Layout'
import LetsCreate from '../components/Contact/LetsCreate'
import Thanks from '../components/Contact/Thanks'
import FeelFree from '../components/Contact/FeelFree'
import Form from '../components/Contact/Form'
import PhoneNumber from '../components/Contact/PhoneNumber'
import SocialLinks from '../components/Contact/SocialLinks'
import { LayoutGroup, motion } from 'framer-motion'
import { staggerCtn } from '../animations/slideUp'

const sx: SxProps = {
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }
    },
    letsCreateCtn: {
        width: { xs: '100%', md: '70%' },
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: '5%',
        pt: 12
    },
    sendMailCtn: {
        width: { xs: '100%', md: '30%' },
        backgroundColor: 'secondary.main',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        p: 4,
        pt: { xs: 4, md: 12 }
    },
    contactCtn: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2
    }
}

const Contact: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>

            <Layout>
                <Box sx={sx.root}>
                    <Box
                        sx={sx.letsCreateCtn}
                        component={motion.div}
                        variants={staggerCtn}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <LetsCreate />
                        <Thanks />
                    </Box>

                    <Box
                        sx={sx.sendMailCtn}
                        component={motion.div}
                        variants={staggerCtn}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        viewport={{ once: true }}
                    >
                        <LayoutGroup>
                            <FeelFree />
                            <Form />

                            <Box sx={sx.contactCtn}>
                                <PhoneNumber />
                                <SocialLinks />
                            </Box>
                        </LayoutGroup>
                    </Box>
                </Box>
            </Layout>
        </div>
    )
}

export default Contact
