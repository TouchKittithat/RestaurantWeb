import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

import Axios from 'axios'


export default function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('')

  const Login = () => {
    Axios.post('http://localhost:3000/login', {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].username)
        navigate('/menu');
      }
    })
  }

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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Grid>
          </Grid>

          <Grid item xs sx={{ py: 2 }}>
            <a href='/newpassword'>forgot your password?</a>
          </Grid>

          <Button
            onClick={Login}
            type='reset'
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          {loginStatus}

          <Grid item xs={12}>
            <Button
              href="/register"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Create Account
            </Button>
          </Grid>

        </Box>
      </Box>
    </Container>
  );
}