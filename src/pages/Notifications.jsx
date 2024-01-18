// NotificationList.js
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Container, Typography } from '@mui/material';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Simulate receiving new notifications
    const timer = setTimeout(() => {
      const newNotification = {
        id: new Date().getTime(),
        message: 'New Notification'+ Math.round(Math.random()),
      };
      setNotifications((prevNotifications) => [newNotification, ...prevNotifications.slice(0,2)]);
    }, 5000);

    return () => clearTimeout(timer);
  }, [notifications]);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Donations
      </Typography>
      <List>
        {notifications.map((notification) => (
          <ListItem key={notification.id} style={{ border: '1px solid #ccc', marginBottom: '10px' }}>
            <ListItemText primary={notification.message} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Notifications;
