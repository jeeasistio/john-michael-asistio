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
    },
    typography: {
        fontSize: 16,
        fontFamily: '"Raleway", "Roboto"',
        h1: {
            fontFamily: 'Raleway'
        },
        h2: {
            fontFamily: 'Raleway'
        },
        h3: {
            fontFamily: 'Raleway'
        },
        h4: {
            fontFamily: 'Raleway'
        },
        h5: {
            fontFamily: 'Raleway'
        },
        h6: {
            fontFamily: 'Raleway'
        },
        subtitle1: {
            fontFamily: 'Roboto'
        },
        subtitle2: {
            fontFamily: 'Roboto'
        },
        body1: {
            fontFamily: 'Roboto'
        },
        body2: {
            fontFamily: 'Roboto'
        },
        button: {
            fontFamily: 'Raleway'
        },
        caption: {
            fontFamily: 'Roboto'
        },
        overline: {
            fontFamily: 'Roboto'
        }
    }
})

theme = responsiveFontSizes(theme)

export default theme
