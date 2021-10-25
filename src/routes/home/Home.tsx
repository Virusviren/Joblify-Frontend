import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Navbar from '../../shared-components/navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <Grid container>
      <Navbar />
    </Grid>
  );
};

export default Home;
