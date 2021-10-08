import { Button, Grid } from '@mui/material';
import React from 'react';
import CompanyBackground from '../../../static/icons/companyBackground.svg';
import CompanyLogo from '../../../static/icons/companyLogo.svg';

const JobDetails = () => {
  return (
    <Grid container className='job-details'>
      <Grid container className='job-details-background'>
        <img
          src={CompanyLogo}
          alt='company logo'
          style={{
            width: '3rem',
            height: '3rem',
            padding: '0.8rem',
            border: '5px solid black',
            borderRadius: '10px',
            position: 'relative',
            top: '7.5rem',
            left: '2rem',
            backgroundColor: 'white',
          }}
        />
      </Grid>

      <Grid
        container
        paddingLeft={4}
        paddingRight={4}
        paddingBottom={4}
        style={{ backgroundColor: 'white', borderRadius: '0 0 10px 10px' }}
      >
        <Button
          variant='contained'
          color='primary'
          style={{
            borderRadius: '10px',
            padding: '0.5rem 3rem',
            textTransform: 'capitalize',

            margin: '2rem 0 2rem auto',
          }}
        >
          Apply
        </Button>

        <Grid container alignItems='center'>
          <Grid item lg={9}>
            <h3>SEnior frontend developer</h3>
          </Grid>
          <Grid item lg={3}>
            <p style={{ color: '#686868' }}>Posted 8 days ago</p>
          </Grid>
        </Grid>
        <Grid container alignItems='center' marginTop={2} marginBottom={6}>
          <Grid item lg={9}>
            <p>Berlin Germany</p>
          </Grid>
          <Grid item lg={3}>
            <p>247 Applicants</p>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems='center'
          marginBottom={6}
          style={{ border: '2px solid #e1e1e1', borderRadius: '10px' }}
        >
          <Grid item lg={3} style={{ borderRight: '2px solid #e1e1e1' }}>
            <p style={{ padding: '1rem ', color: '#686868' }}>Experience</p>
            <h4 style={{ padding: '0 1rem 1rem' }}>Minium 1 year</h4>
          </Grid>
          <Grid item lg={3} style={{ borderRight: '2px solid #e1e1e1' }}>
            <p style={{ padding: '1rem ', color: '#686868' }}>
              Seniority Level
            </p>
            <h4 style={{ padding: '0 1rem 1rem' }}>Senior</h4>
          </Grid>
          <Grid item lg={3} style={{ borderRight: '2px solid #e1e1e1' }}>
            <p style={{ padding: '1rem ', color: '#686868' }}>Job Type</p>
            <h4 style={{ padding: '0 1rem 1rem' }}>Fulltime</h4>
          </Grid>
          <Grid item lg={3}>
            <p style={{ padding: '1rem ', color: '#686868' }}>Salary</p>
            <h4 style={{ padding: '0 1rem 1rem' }}>$3000 / month</h4>
          </Grid>
        </Grid>
        <h3>Overview</h3>
        <p style={{ margin: '1.5rem 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Requirements</h3>
        <p style={{ margin: '1.5rem 0' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Grid>
    </Grid>
  );
};

export default JobDetails;
