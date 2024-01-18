// RewardsList.js
import React from 'react';
import { List, ListItem, ListItemText, Typography, Container } from '@mui/material';
import RewardsList from '../configs/RewardsList';

const Rewards = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Donate and Win Prizes
      </Typography>
      <List>
        {RewardsList.map((reward, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${reward.tier} - ${reward.price}`}
              secondary={reward.reward}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Rewards;
