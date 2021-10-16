import React, { useEffect, useState } from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import candidatePic from '../../../static/icons/viren.jpg';
import RoundInfo from '../../../shared-components/roundInfo/RoundInfo';
import ViewJob from './ViewJob';
import UserActionConfirmation from '../../../shared-components/userAction/UserActionConfirmation';
const Job = () => {
  const [open, setOpen] = useState(false);
  const [OpenUserConfirmation, setOpenUserConfirmation] = useState(false);
  return (
    <Grid container padding={2} className='highlight-candidate'>
      <Grid item xl={'auto'} lg={'auto'} marginLeft={2}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Senior Software Engineer
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
        <p style={{ color: '#707070' }}>Google</p>
      </Grid>
      <Grid item xl={6} lg={5} textAlign='center'>
        <p style={{ fontWeight: 'bold', marginBottom: '1.3rem' }}>
          Applications Received
        </p>
        <p style={{ fontWeight: 'bold' }}>250</p>
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

        <VisibilityIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='primary'
          onClick={() => setOpen(true)}
        />
      </Grid>
      <Grid item xl={1} lg={1} textAlign='center'>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Remove
        </p>
        <CancelOutlinedIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='error'
          onClick={() => setOpenUserConfirmation(true)}
        />
      </Grid>
      <ViewJob open={open} setOpen={setOpen} />
      <UserActionConfirmation
        title={'Are You Sure'}
        message={'Do you want to delete this job ?'}
        open={OpenUserConfirmation}
        setOpen={setOpenUserConfirmation}
      />
    </Grid>
  );
};

export default Job;
