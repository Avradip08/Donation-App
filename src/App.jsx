import Layout from './pages/Layout'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import { CssBaseline } from '@mui/material'

function App() {
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Layout/>
    </ThemeProvider>
  )

}

export default App
