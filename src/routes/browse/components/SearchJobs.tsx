import { Button, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import SearchIcon from '../../../static/icons/search.svg';
import JobIcon from '../../../static/icons/suitcase.svg';
import SalaryIcon from '../../../static/icons/salary.svg';

const SearchJobs = () => {
  const matches = useMediaQuery('(max-width:1535px)');
  return (
    <Grid
      container
      style={{
        backgroundColor: 'white',
        margin: matches ? '2rem 5rem' : '2rem 10rem',
        borderRadius: '10px',
      }}
      alignItems='center'
    >
      <Grid item xl={3} lg={3}>
        <Grid
          container
          alignItems='center'
          gap={matches ? 0 : 2}
          paddingTop={2}
          paddingBottom={2}
        >
          <Grid item>
            <img
              className='searchbar-icons'
              src={SearchIcon}
              alt='SearchIcon'
              style={{ marginRight: matches ? '1rem' : '0' }}
            />
          </Grid>
          <Grid item style={{ width: matches ? '75%' : '85%' }}>
            <input
              className='searchbar-input'
              placeholder='Search'
              type='text'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={3} lg={3}>
        <Grid container alignItems='center' gap={matches ? 0 : 2}>
          <Grid item>
            <img
              className='searchbar-icons'
              src={JobIcon}
              alt='SearchIcon'
              style={{ marginRight: matches ? '1rem' : '0' }}
            />
          </Grid>
          <Grid item style={{ width: matches ? '75%' : '85%' }}>
            <input
              className='searchbar-input'
              placeholder='Job Type'
              type='text'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={3} lg={3}>
        <Grid container alignItems='center' gap={matches ? 0 : 2}>
          <Grid item>
            <img
              className='searchbar-icons'
              src={SalaryIcon}
              alt='SearchIcon'
              style={{ marginRight: matches ? '1rem' : '0' }}
            />
          </Grid>
          <Grid item style={{ width: matches ? '75%' : '85%' }}>
            <input
              className='searchbar-input'
              placeholder='Salary Range'
              type='text'
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xl={3} lg={3} style={{ height: '100%' }}>
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
