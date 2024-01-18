import '../App.css'
import Topic from './Topic'
import Progress from './Progress'
import Donation from './Donation'
import Rewards from './Rewards'
import Faq from './Faq'
import Appbar from './Appbar'
import Notifications from './Notifications'
import { Grid, useMediaQuery, useTheme, Box, Stack, Container } from '@mui/material'
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
    <Container>
        <Appbar/>
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
    )
  }

}

export default Layout;
