import { Button, Grid } from '@mui/material';
import React from 'react';
import SearchIcon from '../../../static/icons/search.svg';
import JobIcon from '../../../static/icons/suitcase.svg';
import SalaryIcon from '../../../static/icons/salary.svg';

const SearchJobs = () => {
  return (
    <Grid
      container
      style={{
        backgroundColor: 'white',
        margin: '2rem 10rem',
        borderRadius: '10px',
      }}
      alignItems='center'
    >
      <Grid item lg={3}>
        <Grid
          container
          alignItems='center'
          gap={2}
          paddingTop={2}
          paddingBottom={2}
        >
          <Grid item>
            <img
              className='searchbar-icons'
              src={SearchIcon}
              alt='SearchIcon'
            />
          </Grid>
          <Grid item style={{ width: '85%' }}>
            <input
              className='searchbar-input'
              placeholder='Search'
              type='text'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={3}>
        <Grid container alignItems='center' gap={2}>
          <Grid item>
            <img className='searchbar-icons' src={JobIcon} alt='SearchIcon' />
          </Grid>
          <Grid item style={{ width: '85%' }}>
            <input
              className='searchbar-input'
              placeholder='Job Type'
              type='text'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={3}>
        <Grid container alignItems='center' gap={2}>
          <Grid item>
            <img
              className='searchbar-icons'
              src={SalaryIcon}
              alt='SearchIcon'
            />
          </Grid>
          <Grid item style={{ width: '85%' }}>
            <input
              className='searchbar-input'
              placeholder='Salary Range'
              type='text'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={3} style={{ height: '100%' }}>
        <Button
          variant='contained'
          fullWidth
          color='primary'
          style={{
            height: '100%',
            borderRadius: '0 10px 10px 0',
            padding: '0.5rem 3rem',
            textTransform: 'capitalize',
            fontSize: 'large',
          }}
        >
          Find Jobs
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchJobs;
