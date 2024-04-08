import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Avatar, Container } from '@mui/material';
import { User } from '../../../types';
import userService from '../../../services/user.service';

const ProfileComponent = () => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await userService.getUserById(1);
        setUser(fetchedUser);
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchUser();
  }, []);

  // Generate an auto-generated avatar based on the user's name
  const avatarInitials = `${user?.name.charAt(0)}`;

  return (
    <Container
      maxWidth="sm"
      style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2>My profile</h2>
      <Card>
        <CardContent>
          <Avatar style={{ marginBottom: '10px' }}>{avatarInitials}</Avatar>
          <Typography variant="subtitle1">Name: {user?.name}</Typography>
          <Typography variant="subtitle1">Email: {user?.email}</Typography>
          <Typography variant="subtitle1">Username: {user?.username}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfileComponent;
