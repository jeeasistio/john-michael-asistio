import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#000000'
    },
    background: {
      default: '#000000'
    },
    text: {
      primary: '#ffffff'
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
