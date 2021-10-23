import React, { useEffect, useState } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
  Avatar,
  CircularProgress,
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
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Redirect } from 'react-router-dom';
import {
  getCandidate,
  getAllApplications,
  deleteApplication,
} from '../../features/Candidate/candidateSlice';
import axios from 'axios';
import { BASE_URL } from '../../utils/endpoints';
import { useMutation } from 'react-query';

const CandidatePersonalInfo = () => {
  const token = localStorage.getItem('token');
  const candidateInfo = useAppSelector(
    (state) => state.candidate.candidateInfo
  );
  const dispatch = useAppDispatch();
  const getUser = async (token: string) => {
    const response = await axios.get(`${BASE_URL}candidate/profile`, {
      headers: { 'x-auth-token': token },
    });
    return response.data;
  };
  const getUserMutation = useMutation(getUser, {
    onSuccess: (data: any) => {
      dispatch(getCandidate(data));
    },
    onError: () => {},
  });
  useEffect(() => {
    token && getUserMutation.mutate(token);
  }, []);

  if (token) {
    return (
      <Grid container>
        {getUserMutation.isLoading ? (
          // && withDrawApplicationMutation.isLoading

          <Grid container textAlign='center'>
            <CircularProgress size={60} sx={{ margin: '2rem auto' }} />
          </Grid>
        ) : (
          <>
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
                  {candidateInfo?.profilePhoto ? (
                    <img
                      src={candidateInfo?.profilePhoto}
                      alt='Candidate_Image'
                      style={{ width: '3rem', borderRadius: '50%' }}
                    />
                  ) : (
                    <Avatar color='primary'>
                      {/* {  if(candidatePersonalInfo)return  candidatePersonalInfo.name} */}
                      {candidateInfo
                        ? candidateInfo?.personalInfo?.name![0]
                        : ''}
                    </Avatar>
                  )}
                </Grid>
                <Grid item>
                  {/* name and id */}
                  <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    {candidateInfo?.personalInfo?.name}{' '}
                    {candidateInfo?.personalInfo?.surname}
                  </p>
                  <p style={{ color: '#686868', fontWeight: 'bold' }}>
                    #{candidateInfo?._id?.substring(0, 10)}
                  </p>
                </Grid>
                <Grid item xl={1} lg={1} textAlign='right'>
                  {/* Logout button */}
                  <LogoutIcon style={{ color: '#686868', fontSize: '2rem' }} />
                </Grid>
                <Grid item>
                  {/* Logout */}
                  <p
                    style={{
                      color: '#686868',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      localStorage.removeItem('token');
                      localStorage.removeItem('userType');
                      window.location.reload();
                    }}
                  >
                    Logout
                  </p>
                </Grid>
              </Grid>
              {/* For Personal Info Edit section */}

              {/* Personal information containers */}
              <PersonalInfo getUserMutation={getUserMutation} />
              <Education />
              <WorkExperience />
              <SkillsSection />
              <Documents />
            </Grid>
          </>
        )}
      </Grid>
    );
  } else {
    return <Redirect to='/' />;
  }
};

export default CandidatePersonalInfo;
