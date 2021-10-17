import { Grid, Button } from '@mui/material';
import React from 'react';
import Stack from '@mui/material/Stack';

import EditIcon from '@mui/icons-material/Edit';
import Logo from '../../../static/icons/Logo.svg';
import SideMenu from './SideMenu';

import candidatePic from '../../../static/icons/viren.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import '../Hr.css';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 30,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '1rem 0.5rem',
    borderRadius: '50%',
    width: '3rem',
    height: '3rem',
  },
}));

const PersonalInfo = () => {
  return (
    <Grid container>
      <Grid
        item
        xl={2}
        lg={2}
        style={{
          boxShadow: '0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
        }}
      >
        <img
          src={Logo}
          alt='Logo'
          style={{ margin: '1rem auto 2rem', width: '10rem' }}
        />
        <SideMenu />
      </Grid>
      <Grid item xl={10} lg={10} style={{ backgroundColor: '#E5E5E5' }}>
        <Grid container alignItems='center' gap={2} padding={3}>
          <Grid item xl={8} lg={7}>
            <h1>Personal Info</h1>
          </Grid>
          <Grid item>
            {/* Avatar img */}
            <img
              src={candidatePic}
              alt='viren'
              style={{ width: '3rem', borderRadius: '50%' }}
            />
          </Grid>
          <Grid item>
            {/* name and id */}
            <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Viren Patil
            </p>
            <p style={{ color: '#686868', fontWeight: 'bold' }}>#3727856243</p>
          </Grid>
          <Grid item xl={1} lg={1} textAlign='right'>
            {/* Logout button */}
            <LogoutIcon style={{ color: '#686868', fontSize: '2rem' }} />
          </Grid>
          <Grid item>
            {/* Logout */}
            <p style={{ color: '#686868', fontWeight: 'bold' }}>Logout</p>
          </Grid>
        </Grid>
        {/* For Applications and result tag */}
        <Grid container alignItems='center' gap={5} padding={3}>
          <Grid
            item
            style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '10px',
              boxShadow: ' 0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
            }}
            textAlign='center'
          >
            <StyledBadge color='secondary' badgeContent={<EditIcon />}>
              <img
                src={candidatePic}
                alt='hrImage'
                style={{
                  width: '10rem',
                  borderRadius: '50%',
                  margin: '0 auto 2rem',
                }}
              />
            </StyledBadge>

            <h2 style={{ marginBottom: '1rem' }}>Chris Evans</h2>
            <h3 style={{ color: '#707070' }}>User ID - #345667</h3>
          </Grid>
          <Grid
            item
            xl={6}
            lg={5}
            style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '10px',
              boxShadow: ' 0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: '4rem' }}>Details</h2>
            <Grid container>
              <Grid item xl={6} lg={6} paddingRight={4}>
                <p className='input-title'>First name</p>
                <input
                  className='submit-application-input'
                  type='text'
                  value='Chris'
                />
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Last name</p>
                <input
                  className='submit-application-input'
                  type='text'
                  value='Evans'
                />
              </Grid>
              <Grid item xl={6} lg={6} marginTop={6} paddingRight={4}>
                <p className='input-title'>Mobile number</p>
                <input
                  className='submit-application-input'
                  type='text'
                  value='123456789'
                />
              </Grid>
              <Grid item xl={6} lg={6} marginTop={6}>
                <p className='input-title'>Email</p>
                <input
                  className='submit-application-input'
                  type='text'
                  value='SeniorHr@gmail.com'
                  readOnly
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            style={{
              backgroundColor: 'white',
              padding: '3rem',
              borderRadius: '10px',
              boxShadow: ' 0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h2 style={{ marginBottom: '4rem' }}> Work details</h2>
            <Grid item xl={12} lg={12}>
              <p className='input-title'>Position</p>
              <input
                className='submit-application-input'
                type='text'
                value='Senior Hr'
                readOnly
              />
            </Grid>
            <Grid item xl={12} lg={12} marginTop={6}>
              <p className='input-title'>Company</p>
              <input
                className='submit-application-input'
                type='text'
                value='Google'
                readOnly
              />
            </Grid>
          </Grid>
          <div style={{ margin: '0 0 1rem auto', paddingRight: '8rem' }}>
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
            >
              Save Changes
            </Button>
          </div>
        </Grid>

        {/* For filter and results of the component */}
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
