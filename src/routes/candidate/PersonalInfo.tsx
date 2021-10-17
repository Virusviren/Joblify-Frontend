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
import candidatePic from '../../static/icons/viren.jpg';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '1rem 1rem',
    borderRadius: '50%',
    width: '2rem',
    height: '2rem',
  },
}));
const PersonalInfo = () => {
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
          <h3>Personal information</h3>
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
            Edit
          </Button>{' '}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      <Grid container padding={3} gap={8}>
        <Grid item>
          {' '}
          <StyledBadge color='primary' badgeContent={<EditIcon />}>
            <img
              src={candidatePic}
              alt='hrImage'
              style={{
                width: '8rem',
                borderRadius: '50%',
                margin: '0 auto 2rem',
              }}
            />
          </StyledBadge>
        </Grid>
        <Grid item xl={10} lg={9}>
          <Grid container>
            {' '}
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>First name</p>
              <h3 style={{ marginTop: '1rem' }}>Viren</h3>
            </Grid>
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>Last name</p>
              <h3 style={{ marginTop: '1rem' }}>Patil</h3>
            </Grid>
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>Date of birth</p>
              <h3 style={{ marginTop: '1rem' }}>10/19/1997</h3>
            </Grid>
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>Citizenship</p>
              <h3 style={{ marginTop: '1rem' }}>India</h3>
            </Grid>
            <Grid item xl={6} lg={6}>
              {' '}
              <p className='input-title'>Address</p>
              <h3 style={{ marginTop: '1rem' }}>Lublin Poland</h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              {' '}
              <p className='input-title'>Mobile number</p>
              <h3 style={{ marginTop: '1rem' }}>123456</h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              {' '}
              <p className='input-title'>Email</p>
              <h3 style={{ marginTop: '1rem' }}>viren@gmail.com</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalInfo;
