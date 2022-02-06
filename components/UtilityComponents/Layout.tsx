import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import React from 'react'
import Logo from './Logo'

const sx: SxProps = {
  header: {
    minHeight: '10vh',
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 4
  },
  main: {
    minHeight: '90vh'
  }
}

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Box component="header" sx={sx.header}>
        <Logo />
      </Box>

      <Box component="main" sx={sx.main}>
        {children}
      </Box>
    </>
  )
}

export default Layout
