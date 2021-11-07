import { Grid } from '@mui/material';
import React from 'react';
import facebook from '../../../static/icons/facebook.png';
import google from '../../../static/icons/google.png';
import trello from '../../../static/icons/trello.png';
import companyLogo from '../../../static/icons/companyLogo.jpeg';
import microsoft from '../../../static/icons/microsoft.png';
import paypal from '../../../static/icons/paypal.png';
const HomeInfo = () => {
  return (
    <>
      <Grid container alignItems='center' textAlign='center' margin={6}>
        <Grid item xl sm>
          <img src={facebook} alt='facebook img' />
        </Grid>
        <Grid item xl sm>
          <span
            style={{
              borderRadius: '10px',
              backgroundColor: '#ECEBFF',
              color: '#4640DE',
              padding: '1rem 1.4rem',
            }}
          >
            1000+ jobs listed here
          </span>
        </Grid>
        <Grid item xl sm>
          <img src={google} alt='google img' />
        </Grid>
      </Grid>
      <Grid container alignItems='center' textAlign='center' margin={6}>
        <Grid item xl sm textAlign='left' ml={5}>
          <img
            src={companyLogo}
            alt='img'
            style={{ height: '50px', width: '50px', borderRadius: '10px' }}
          />
        </Grid>
        <Grid item xl={5} sm={5}>
          {' '}
          <h1
            style={{
              fontWeight: 'bold',
              fontSize: '48px',
              marginBottom: '1rem',
            }}
          >
            Job search for people passionate about startups
          </h1>
          <p style={{ fontWeight: 'bold', fontSize: '15px', color: '#686868' }}>
            Joblify is a job search platform for people who are paasionate about
            working for startups and MNCs.
          </p>
          <p style={{ fontWeight: 'bold', fontSize: '15px', color: '#686868' }}>
            You can quickly and easily search for jobs worldwide.
          </p>
        </Grid>
        <Grid item xl sm textAlign='right' mr={5}>
          <img src={trello} alt='img' />
        </Grid>
      </Grid>
      <Grid container alignItems='center' textAlign='center' margin={6}>
        <Grid item xl sm>
          <img src={microsoft} alt='facebook img' />
        </Grid>
        <Grid item xl sm>
          <p style={{ fontWeight: 'bold', fontSize: '15px', color: '#686868' }}>
            Partnership with Glassdoor and LinkedIn
          </p>
        </Grid>
        <Grid item xl sm>
          <img src={paypal} alt='google img' />
        </Grid>
      </Grid>
    </>
  );
};

export default HomeInfo;
