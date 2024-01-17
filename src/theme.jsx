import { createTheme } from "@mui/material/styles"

const theme = createTheme({
    palette:{
            mode:"dark",
            primary: {
            main: '#a5b0cb',
            },
            secondary: {
            main: '#f50057',
            },
            text: {
                primary : "#dedede",
                secondary : "#757575"
            },
            
    },
    typography: {
        fontFamily:
            'DM Mono'
      },
})

export default theme;