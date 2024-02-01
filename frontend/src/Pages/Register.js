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

export default function Register() {

  const navigate = useNavigate()

  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [confirmPasswordReg, setConfirmPasswordReg] = useState('');
  const [firstNameReg, setFirstNameReg] = useState('');
  const [lastNameReg, setLastNameReg] = useState('');
  const [phoneReg, setPhoneReg] = useState('');
  const [regStatus, setRegstatus] = useState('')


  const register = () => {
    if (passwordReg !== confirmPasswordReg) {
      setRegstatus('Passwords do not match')
      return;
    }
    Axios.post('http://localhost:3000/register', {
      username: usernameReg,
      firstname: firstNameReg,
      lastname: lastNameReg,
      phone: phoneReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response)
      navigate('/')
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p sx={{ marginTop: '70px' }}> </p>
        <p sx={{ marginTop: '70px' }}> </p>

        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Create Account
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
                onChange={(event) => setUsernameReg(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="firstname"
                label="Firstname"
                type="firstname"
                id="firstname"
                onChange={(event) => setFirstNameReg(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="lastname"
                label="Lastname"
                type="lastname"
                id="lastname"
                onChange={(event) => setLastNameReg(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone"
                type="phone"
                id="phone"
                onChange={(event) => setPhoneReg(event.target.value)}
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
                onChange={(event) => setPasswordReg(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirm password"
                onChange={(event) => setConfirmPasswordReg(event.target.value)}
              />
            </Grid>
          </Grid>

          <Button
            onClick={register}
            type="reset"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Account
          </Button>

          {regStatus}

        </Box>
      </Box>
    </Container>
  );
}