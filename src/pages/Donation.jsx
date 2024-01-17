// NumericForm.js
import React, { useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Select,
  Container,
  Typography,
} from '@mui/material';
import CurrencyList from '../configs/CurrencyList';
const Donation = () => {

  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(CurrencyList[0]);

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
    // Handle form submission (you can perform additional actions here)
    console.log('Submitted:', { amount, currency });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '20px', borderRadius: '15px' }}>
      
      <form onSubmit={handleSubmit}>
        <Typography variant='h6'>
            Contribute
        </Typography>
        <TextField
          type="text"
          label="Amount"
          variant="outlined"
          fullWidth
          value={amount}
          onChange={handleAmountChange}
          error={!/^\d*\.?\d*$/.test(amount) && amount !== ''}
          helperText={!/^\d*\.?\d*$/.test(amount) && amount !== '' && 'Please enter a positive number'}
        />
        <FormControl fullWidth variant="outlined" style={{ marginTop: '20px' }}>
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
