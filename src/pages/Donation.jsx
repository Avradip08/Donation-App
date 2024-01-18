// NumericForm.js
import React, { useEffect, useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Container,
  Typography,
  Box,
  Stack,
  Skeleton,
} from '@mui/material';
import {loadStripe} from '@stripe/stripe-js';
import PaymentConfigs from '../configs/PaymentConfigs'

import CurrencyList from '../configs/CurrencyList';
const Donation = () => {

  const [amount, setAmount] = useState(50);
  const [currency, setCurrency] = useState(CurrencyList[0]);

  const makePayment = async()=>{
        const stripe = await loadStripe(PaymentConfigs.Public_Key);

        const body = { amount, currency }

        const headers = {
            "Content-Type":"application/json"
        }
        const response = await fetch(`${PaymentConfigs.BASE_URL}/create-checkout-session`,{
            method:"POST",
            headers:headers,
            body: JSON.stringify(body)
        });

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId:session.id
        });
        
        if(result.error){
            console.log(result.error);
        }
  }

  const handleAmountChange = (event) => {
    // Validate if the input is a positive number
    const input = event.target.value;
    if (/^\d*\.?\d*$/.test(input)) {
      setAmount(input);
    }
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //making the payment through stripe
    makePayment();
  };
  
  return (
    <Container maxWidth="md" sx={{ marginTop: '20px', borderRadius: '15px' }}>
      
      <form onSubmit={handleSubmit}>
        <Typography variant='h6'>
            Contribute
        </Typography>
        
        <Stack marginTop="20px" direction="row" spacing={2} >
          <Box flex={1}>
              <FormControl  fullWidth variant="outlined">
                <InputLabel>Currency</InputLabel>
                <Select
                  value={currency}
                  onChange={handleCurrencyChange}
                  label="Currency"
                >
                  {
                      CurrencyList.map((currency,index)=>{
                          return <MenuItem key={index} value={currency}>{currency}</MenuItem>
                      })
                  }
                </Select>
              </FormControl>
          </Box>
          <Box flex={3}>
              <TextField
                fullWidth
                type="text"
                label="Amount"
                variant="outlined"
                value={amount}
                onChange={handleAmountChange}
                error={!/^\d*\.?\d*$/.test(amount) && amount !== ''}
                helperText={!/^\d*\.?\d*$/.test(amount) && amount !== '' && 'Please enter a positive number'}
              />
          </Box>
        </Stack>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: '20px' }}
        >
          Donate Now
        </Button>
      </form>
    </Container>
  );
};

export default Donation;
