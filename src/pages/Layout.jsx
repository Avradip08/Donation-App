import '../App.css'
import Topic from './Topic'
import Progress from './Progress'
import Donation from './Donation'
import Rewards from './Rewards'
import Faq from './Faq'
import Appbar from './Appbar'
import Notifications from './Notifications'
import { Grid, useMediaQuery, useTheme, Box, Stack, Container, Paper } from '@mui/material'
import { useEffect } from 'react'
import PaymentConfigs from '../configs/PaymentConfigs'

function Layout() {

  useEffect(()=>{
    const callbackend = async()=>{
      await fetch(`${PaymentConfigs.BASE_URL}/`);
    }
    setInterval(()=>{
      callbackend();
    },3000)
  },[])
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  if(isSmall){
    return (
        <Box >
          <Box position="sticky" top={5} left={"1.5%"} zIndex={100} bgcolor="#3c3c3c" sx={{width:"97%",borderRadius:"8px"}}>
              <Appbar/>
          </Box>
          <Box spacing={2} justifyContent="center" alignItems="center">
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
        <Box > 
          <Box position="sticky" top={5} left={"1.5%"} zIndex={100} bgcolor="#3c3c3c" sx={{width:"97%",borderRadius:"8px"}}> 
            <Appbar/>
          </Box>
          <Container fixed>
            <Stack direction="row">
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
          </Container>
        </Box>
      )
  }

}

export default Layout;
