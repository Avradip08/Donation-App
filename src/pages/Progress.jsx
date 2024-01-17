import React, { useEffect, useState } from 'react';
import { LinearProgress, Typography, Container } from '@mui/material';
import DonationInfo from '../configs/DonationInfo';

const Progress = () => {
  const [amount,setAmount] = useState(20000);
  const [percentage,setPercentage] = useState(25);
  const populateAmout = ()=>{
    
    //api call
    const newAmount = 24000; //populate through api result
    setAmount(newAmount);
    setPercentage(Math.floor((newAmount/DonationInfo.goal)*100));
    
  }
  useEffect(()=>{
    
    const timer = setTimeout(()=>{
      populateAmout();
    },3000)

    return () => clearTimeout(timer);
  },[amount])

  return (
    
    <Container  style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        {amount}$ raised of {DonationInfo.goal}$ target
      </Typography>
      <LinearProgress color='primary' sx={{height:"25px" , borderRadius: "15px"}} variant="determinate" value={percentage} style={{ width: '100%' }} />
    </Container>
  );
};

export default Progress;