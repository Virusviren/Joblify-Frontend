import React from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
const WorkExperience = () => {
  return (
    <div
      style={{
        margin: '2rem 3rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 2px 10px 1px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Grid container alignItems='center' padding={3}>
        <Grid item xl={11} lg={10}>
          <h3>Work Experience</h3>
        </Grid>
        <Grid item xl={1} lg={2}>
          {' '}
          <Button
            variant='contained'
            color='primary'
            style={{
              borderRadius: '10px',
              padding: '0.5rem 3rem',
              textTransform: 'capitalize',
            }}
          >
            Add
          </Button>{' '}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      <Grid container padding={3} gap={8}>
        <Grid container alignItems='center'>
          {' '}
          <Grid item xl={3} lg={3} paddingBottom={3}>
            {' '}
            <p className='input-title'>Company name</p>
            <h3 style={{ marginTop: '1rem' }}>Bachelors</h3>
          </Grid>
          <Grid item xl={3} lg={3} paddingBottom={3}>
            {' '}
            <p className='input-title'>Position</p>
            <h3 style={{ marginTop: '1rem' }}>MIT</h3>
          </Grid>
          <Grid item xl={2} lg={2} paddingBottom={3}>
            {' '}
            <p className='input-title'>From</p>
            <h3 style={{ marginTop: '1rem' }}>1997</h3>
          </Grid>
          <Grid item xl={2} lg={2} paddingBottom={3}>
            {' '}
            <p className='input-title'>To</p>
            <h3 style={{ marginTop: '1rem' }}>2000</h3>
          </Grid>
          <Grid item xl={1} lg={1} paddingBottom={3}>
            {' '}
            <EditIcon style={{ fontSize: '2rem' }} color='primary' />
          </Grid>
          <Grid item xl={1} lg={1} paddingBottom={3}>
            {' '}
            <CancelOutlinedIcon style={{ fontSize: '2rem' }} color='error' />
          </Grid>
          <Grid item xl={12} lg={12} paddingBottom={3}>
            {' '}
            <p className='input-title'>Description</p>
            <h3 style={{ marginTop: '1rem' }}>
              Lorem fiuabfiuadbfiua faisdufuiasfuias
              fbauidfuiasbfiuadbfuadibfoadfb
            </h3>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default WorkExperience;
