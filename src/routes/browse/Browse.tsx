import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../../shared-components/navbar/Navbar';
import SearchJobs from './components/SearchJobs';
import './Browse.css';

const Browse = () => {
  return (
    <Grid container>
      <Navbar />
      <Grid container style={{ backgroundColor: '#ECECEC' }}>
        <SearchJobs />
      </Grid>
    </Grid>
  );
};

export default Browse;
