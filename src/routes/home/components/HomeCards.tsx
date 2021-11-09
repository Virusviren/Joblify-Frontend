import { Grid } from '@mui/material';
import React from 'react';
import JobCard from '../../browse/components/JobCard';
import facebook from '../../../static/icons/facebook.png';
import google from '../../../static/icons/google.png';
import trello from '../../../static/icons/trello.png';
import companyLogo from '../../../static/icons/companyLogo.jpeg';
import microsoft from '../../../static/icons/microsoft.png';
import paypal from '../../../static/icons/paypal.png';

const HomeCards = () => {
  return (
    <Grid
      container
      style={{ borderRadius: '10px', padding: '2rem', cursor: 'pointer' }}
      className='job-card'
    >
      <Grid container gap={3} alignItems='center' marginBottom={6}>
        <Grid item>
          <img
            src={companyLogo}
            alt='Company logo'
            style={{
              borderRadius: '10px',
              width: '2rem',
            }}
          ></img>
        </Grid>
        <Grid item>
          <h2>Senior Frontend Developer</h2>
          <p style={{ marginTop: '1rem' }}>2972, Westminster Rd., Berlin</p>
        </Grid>
      </Grid>
      <Grid container gap={3} alignItems='center'>
        <Grid item>
          <span className='type-tag'>Full time</span>
        </Grid>
        <Grid item>
          <span className='level-tag'>Senior level</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeCards;
