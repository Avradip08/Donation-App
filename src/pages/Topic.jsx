import React from 'react';
import { Container, Typography, Paper, Card, CardContent, CardMedia, Grid } from '@mui/material';
import Intro from "../configs/Intro"

const Topic = () => {
  return (
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
      <Card x={{ borderRadius:"25px" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {Intro.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {Intro.description}
              </Typography>
            </CardContent>
      </Card>
    </Container>
  );
};

export default Topic;