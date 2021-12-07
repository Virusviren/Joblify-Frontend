import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../../shared-components/navbar/Navbar';
import Info from './components/Info';

const Contact = () => {
  return (
    <Grid container>
      <Navbar />
      <Info />
    </Grid>
  );
};

export default Contact;
