import { Button, Grid } from '@mui/material';
import React from 'react';
import JobCard from '../../browse/components/JobCard';
import facebook from '../../../static/icons/facebook.png';
import google from '../../../static/icons/google.png';
import trello from '../../../static/icons/trello.png';
import companyLogo from '../../../static/icons/companyLogo.jpeg';
import microsoft from '../../../static/icons/microsoft.png';
import paypal from '../../../static/icons/paypal.png';
import HomeCards from './HomeCards';
import { Link } from 'react-router-dom';
const ExploreJobs = () => {
  return (
    <div style={{ backgroundColor: '#F6F6F4', width: '100%' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontWeight: 'bold', fontSize: '36px', marginTop: '6rem' }}>
          Explore popular jobs
        </h3>
        <p
          style={{
            fontWeight: 'bold',
            fontSize: '15px',
            color: '#686868',
            marginTop: '1.5rem',
          }}
        >
          Joblify is a free-of-charge platform tailored to the needs of many
          startups and MNCs
        </p>
      </div>
      <Grid container gap={12} pb={8} pt={8} pr={15} pl={15}>
        <Grid item xl sm>
          <HomeCards />
        </Grid>
        <Grid item xl sm>
          <HomeCards />
        </Grid>
        <Grid item xl sm>
          <HomeCards />
        </Grid>
      </Grid>
      <Grid container gap={12} pb={8} pr={15} pl={15}>
        <Grid item xl sm>
          <HomeCards />
        </Grid>
        <Grid item xl sm>
          <HomeCards />
        </Grid>
        <Grid item xl sm>
          <Grid
            container
            style={{ borderRadius: '10px', padding: '2rem', cursor: 'pointer' }}
            className='job-card'
          >
            <h2 style={{ margin: '0 auto' }}>Discover 1000+ other jobs</h2>
            <Link to='/browse' style={{ margin: '0 auto' }}>
              <Button
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                  margin: '2rem auto',
                }}
              >
                Explore All Jobs
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExploreJobs;
