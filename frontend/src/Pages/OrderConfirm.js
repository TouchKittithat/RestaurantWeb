import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import DoneIcon from '@mui/icons-material/Done';


export default function OrderConfirm() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}

      >
        <p sx={{ marginTop: '70px' }}></p>

        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} xs={{ marginTop: '70px' }}>
          <DoneIcon />
        </Avatar>

        <Typography component="h1" variant="h5" marginTop={4}>
          Order Confirmed
        </Typography>

        <Box component="form" sx={{ mt: 3 }}>
          <Button
            href='/menu'
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Back to Menu
          </Button>

          <Button
            href="/"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
          >
            Home
          </Button>

        </Box>
      </Box>
    </Container>
  );
}