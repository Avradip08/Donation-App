import React, { useEffect, useState } from 'react';
import { LinearProgress, Typography, Container } from '@mui/material';
import DonationInfo from '../configs/DonationInfo';

const Progress = () => {
  const [amount,setAmount] = useState(0);
  const [percentage,setPercentage] = useState(0);
  const populateAmout = ()=>{
    
    //api call - to populate data in real time
    const newAmount = 24000; 
    setAmount(newAmount);
    setPercentage(Math.floor((newAmount/DonationInfo.goal)*100));
    
  }
  useEffect(()=>{
      populateAmout();
  },[])

  return (
    
    <Container fixed  style={{ marginTop: '20px' }}>
      <Typography variant="h6" gutterBottom>
        {amount}$ raised of {DonationInfo.goal}$ target
      </Typography>
      <LinearProgress color='primary' sx={{height:"25px" , borderRadius: "15px"}} variant="determinate" value={percentage} />
    </Container>
  );
};

export default Progress;