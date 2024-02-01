import * as React from 'react';
import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Navbar() {
  return (
    <AppBar sx={{ backgroundColor: '#063970' }}>
      <Toolbar>
        <FastfoodIcon sx={{ transform: "scale(1.5)" }} />

        <Tabs
          sx={{ marginLeft: '20px' }}
          indicatorColor="secondary"
          textColor="#FFFFFF"
        >

          <Tab href="/" label="HOME" />
          <LocationOnIcon sx={{ marginTop: "10px" }} />
          <Tab href="/Location" label="LOCATION" />
          <Tab href="/Menu" label="MENU" />
          <Tab href="/Admin" label="Admin" />
        </Tabs>

        <Button href="/login" sx={{ marginLeft: "auto" }} variant="contained">
          Login
        </Button>
        
        <Button href="/Register" sx={{ marginLeft: "10px" }} variant="contained">
          Create Account
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;