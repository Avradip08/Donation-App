import '../App.css'
import Topic from './Topic'
import Progress from './Progress'
import Donation from './Donation'
import Rewards from './Rewards'
import Faq from './Faq'
import Appbar from './Appbar'
import Notifications from './Notifications'
import { Grid, useMediaQuery, useTheme, Box, Stack } from '@mui/material'

function Layout() {

  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  if(isSmall){
    return (
      
        <Box >
          <Box spacing={2} justifyContent="center" alignItems="center">
            <Appbar/>
            <Topic/>
            <Progress/>
            <Donation/>
            <Notifications/>
            <Faq/>
            <Rewards/>
          </Box>
        </Box>
      
    )
  }else{
    return (
    <Box>
        <Appbar/>
        <Stack direction="row" spacing={2}>
          <Box flex={4}>
                <Topic/>
                <Progress/>
                <Faq/>
                <Rewards/>
          </Box>
          <Box flex={2}>
             <Stack position = "fixed" >
                <Notifications/>
                <Donation/>
              </Stack>
          </Box>
        </Stack>
    </Box>
    )
  }

}

export default Layout;
