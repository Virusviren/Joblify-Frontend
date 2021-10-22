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
import LogoutIcon from '@mui/icons-material/Logout';

import CandidateSideMenu from './CandidateSideMenu';
import Logo from '../../static/icons/Logo.svg';
import candidatePic from '../../static/icons/viren.jpg';
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import WorkExperience from './WorkExperience';
import SkillsSection from './SkillsSection';
import Documents from './Documents';
import { useAppSelector } from '../../app/hooks';
import { Redirect } from 'react-router-dom';
const CandidatePersonalInfo = () => {
  const token = localStorage.getItem('token');

  if (token) {
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
          <CandidateSideMenu />
        </Grid>
        <Grid item xl={10} lg={10} style={{ backgroundColor: '#E5E5E5' }}>
          <Grid container alignItems='center' gap={2} padding={3}>
            <Grid item xl={8} lg={7}>
              {/* search input field */}
              <h2>Personal Information</h2>
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
              <p style={{ color: '#686868', fontWeight: 'bold' }}>
                #3727856243
              </p>
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
          {/* For Personal Info Edit section */}

          {/* Personal information containers */}
          <PersonalInfo />
          <Education />
          <WorkExperience />
          <SkillsSection />
          <Documents />
        </Grid>
      </Grid>
    );
  } else {
    return <Redirect to='/' />;
  }
};

export default CandidatePersonalInfo;
