import React from 'react';
import { Grid } from '@mui/material';
import './RoundInfo.css';

interface IPROPS {
  status?: number;
}
const RoundInfo = ({ status }: IPROPS) => {
  return (
    <Grid container alignItems='center' justifyContent='center'>
      <Grid
        item
        className={
          status === 1 ? 'round-circle-active' : 'round-circle-inactive'
        }
      ></Grid>
      <Grid
        item
        className={status === 1 ? 'round-line-active' : 'round-line-inactive'}
      ></Grid>
      <Grid
        item
        className={
          status === 2 ? 'round-circle-active' : 'round-circle-inactive'
        }
      ></Grid>
      <Grid
        item
        className={status === 2 ? 'round-line-active' : 'round-line-inactive'}
      ></Grid>
      <Grid
        item
        className={
          status === 3 ? 'round-circle-active' : 'round-circle-inactive'
        }
      ></Grid>
      <Grid
        item
        className={status === 3 ? 'round-line-active' : 'round-line-inactive'}
      ></Grid>
      <Grid
        item
        className={
          status === 4 ? 'round-circle-active' : 'round-circle-inactive'
        }
      ></Grid>
    </Grid>
  );
};

export default RoundInfo;
