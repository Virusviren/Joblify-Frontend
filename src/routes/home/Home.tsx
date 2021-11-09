import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Navbar from '../../shared-components/navbar/Navbar';
import ExploreJobs from './components/ExploreJobs';
import HomeInfo from './components/HomeInfo';
import './Home.css';

const Home = () => {
  return (
    <Grid container>
      <Navbar />
      <HomeInfo />
      <ExploreJobs />
    </Grid>
  );
};

export default Home;
