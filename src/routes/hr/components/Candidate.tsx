import React from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import candidatePic from '../../../static/icons/viren.jpg';
import RoundInfo from '../../../shared-components/roundInfo/RoundInfo';
const Candidate = () => {
  return (
    <Grid container padding={2} className='highlight-candidate'>
      <Grid item xl={'auto'} lg={'auto'}>
        {' '}
        <img
          src={candidatePic}
          alt='viren'
          style={{ width: '4.5rem', borderRadius: '50%' }}
        />
      </Grid>
      <Grid item xl={6} lg={5} marginLeft={2}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Chris Evans
          <span
            style={{
              color: '#707070',
              fontSize: '0.7rem',
              marginLeft: '1rem',
            }}
          >
            04 February 2021
          </span>
        </p>
        <p style={{ color: '#707070' }}>Senior Software Engineer</p>
      </Grid>
      <Grid item xl={3} lg={3} textAlign='center'>
        <p style={{ fontWeight: 'bold', marginBottom: '1.3rem' }}>1st Round</p>
        <RoundInfo />
      </Grid>
      <Grid item xl={1} lg={1} textAlign='center'>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          View
        </p>

        <VisibilityIcon style={{ fontSize: '2rem' }} color='primary' />
      </Grid>
      <Grid item xl={1} lg={1} textAlign='center'>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Reject
        </p>
        <CancelOutlinedIcon style={{ fontSize: '2rem' }} color='error' />
      </Grid>
    </Grid>
  );
};

export default Candidate;
