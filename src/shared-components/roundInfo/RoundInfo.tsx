import React from 'react';
import { Grid } from '@mui/material';
import './RoundInfo.css';
const RoundInfo = () => {
  return (
    <Grid container alignItems='center' justifyContent='center'>
      <Grid item className='round-circle-active'></Grid>
      <Grid item className='round-line-active'></Grid>
      <Grid item className='round-circle-inactive'></Grid>
      <Grid item className='round-line-inactive'></Grid>
      <Grid item className='round-circle-inactive'></Grid>
      <Grid item className='round-line-inactive'></Grid>
      <Grid item className='round-circle-inactive'></Grid>
    </Grid>
  );
};

export default RoundInfo;
