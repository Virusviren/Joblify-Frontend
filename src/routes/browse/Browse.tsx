import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import Navbar from '../../shared-components/navbar/Navbar';
import SearchJobs from './components/SearchJobs';
import './Browse.css';
import MainSection from './components/MainSection';

const Browse = () => {
  return (
    <Grid container>
      <Navbar />
      <Grid container style={{ backgroundColor: '#ECECEC' }}>
        <SearchJobs />
        <MainSection />
      </Grid>
    </Grid>
  );
};

export default Browse;
