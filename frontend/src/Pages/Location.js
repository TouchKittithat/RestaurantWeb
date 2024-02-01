import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocationImg from '../images/location.jpg';

import React from 'react'

export default function Location() {
  return (
    <Grid container spacing={2} sx={{ marginTop: '90px' }} >
      <Grid item xs={12} md={6}>

        <div style={{ marginLeft: '35px', marginBottom: '40px' }}>
          <img src={LocationImg} alt="location" style={{ maxWidth: '80%', height: 'auto', boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)' }} />
        </div>

      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{
          bgcolor: '#7A98DE',
          p: 2,
          borderRadius: 3,
          marginRight: 12,
          marginTop: 3,
          boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
        }}>
          <Typography variant="h6" sx={{ color: '#FFFFFF', textAlign: 'center' }}>
            LOCATION
          </Typography>

          <Box sx={{ color: '#FFFFFF', marginTop: 2, textAlign: 'center' }}>
            <Typography variant="body1">
              277   ถนน ทุ่งรี ตำบล คอหงส์ อำเภอหาดใหญ่ สงขลา  90110
            </Typography>
            <p></p>
            <Typography variant="body2">
              เปิด 09:00 - 22:00
              <br />
              โทร : 098-999-9999
            </Typography>
          </Box>
          
        </Box>
      </Grid>
    </Grid>
  );
};
