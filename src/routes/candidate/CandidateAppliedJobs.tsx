import React, { useEffect, useState } from 'react';
import Logo from '../../static/icons/Logo.svg';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Avatar,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import candidatePic from '../../static/icons/viren.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import CandidateSideMenu from './CandidateSideMenu';
import { hrFilter } from '../../static/data/options';
import CandidateJob from './CandidateJob';
import CustomPagination from '../../shared-components/pagination/CustomPagination';
import Filter from '../../shared-components/filter/Filter';
import { Redirect } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  getCandidate,
  getAllApplications,
  deleteApplication,
} from '../../features/Candidate/candidateSlice';
import axios from 'axios';
import { BASE_URL } from '../../utils/endpoints';
import { useMutation } from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import { IappliedJobsApplications } from '../../typings/appliedJobsApplications';
//
//
//

const CandidateAppliedJobs = () => {
  const token = localStorage.getItem('token')!;
  const candidateInfo = useAppSelector(
    (state) => state.candidate.candidateInfo
  );
  const appliedJobsApplications = useAppSelector(
    (state) => state.candidate.appliedJobsApplications
  );

  const candidatePersonalInfo = candidateInfo.personalInfo;
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

  const getAllAppliedJobsList = async (token: string) => {
    const response = await axios.get(`${BASE_URL}candidate/applications`, {
      headers: { 'x-auth-token': token },
    });
    return response.data;
  };
  const getAllApplicationsMutation = useMutation(getAllAppliedJobsList, {
    onSuccess: (data: any) => {
      dispatch(getAllApplications(data));
    },
    onError: () => {},
  });
  // Test

  const withDrawApplication = async (id: string) => {
    // const newListOfApplication = appliedJobsApplications.filter(
    //   (job) => job._id !== id
    // );

    // dispatch(deleteApplication(newListOfApplication));

    await axios.patch(`${BASE_URL}candidate/withdraw/${id}`, null, {
      headers: { 'x-auth-token': token },
    });
    getAllApplicationsMutation.mutate(token);
  };
  const withDrawApplicationMutation = useMutation(withDrawApplication, {
    onSuccess: (data: any) => {
      // console.log(data.data);
      // dispatch(getAllApplications(data));
    },
    onError: () => {},
  });

  // States

  useEffect(() => {
    token && getUserMutation.mutate(token);
    token && getAllApplicationsMutation.mutate(token);
  }, []);

  // useEffect(() => {
  //   return () => {
  //     withDrawApplicationMutation.mutate(token);
  //   };
  // }, []);

  if (token !== '' && localStorage.getItem('userType') === 'Candidate') {
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
                <Grid item>
                  {/* searchIcon */}
                  <SearchIcon style={{ color: '#686868', fontSize: '2rem' }} />
                </Grid>
                <Grid item xl={8} lg={7}>
                  {/* search input field */}
                  <input
                    type='text'
                    placeholder='Search applications'
                    style={{
                      border: 'none',
                      width: '50%',
                      backgroundColor: '#e5e5e5',
                      fontWeight: 'bold',
                      fontSize: 'large',
                      outline: 'none',
                      padding: '0.5rem',
                      color: '#686868',
                    }}
                  />
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
                      {candidatePersonalInfo
                        ? candidatePersonalInfo.name![0]
                        : ''}
                    </Avatar>
                  )}
                </Grid>
                <Grid item>
                  {/* name and id */}
                  <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    {candidatePersonalInfo?.name}
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
              {/* For Applications and result tag */}
              <Grid container alignItems='center' gap={10} padding={3}>
                <Grid item>
                  <h2>Applications</h2>
                </Grid>
                <Grid item>
                  <p style={{ color: '#686868' }}>
                    {/* showing <span style={{ color: 'black' }}>50</span> results
                    from 4000 total  */}
                    showing total applications{'  '}
                    <span style={{ color: 'black' }}>
                      {' '}
                      {candidateInfo?.appliedJobs?.length}
                    </span>
                  </p>
                </Grid>
              </Grid>
              {/* For filter and results of the component */}
              <Grid
                container
                paddingLeft={3}
                paddingTop={2}
                paddingBottom={2}
                paddingRight={3}
              >
                <Grid item xl={3} lg={3} paddingRight={4}>
                  <Grid container alignItems='center' gap={2} marginBottom={4}>
                    <Grid item>
                      <SettingsInputCompositeIcon />
                    </Grid>
                    <Grid item>
                      <h3>Filters</h3>
                    </Grid>
                  </Grid>
                  {/* <Filter
              filterName='Type of Applications'
              filterOptions={hrFilter}
            /> */}
                </Grid>
                <Grid
                  item
                  xl={9}
                  lg={9}
                  padding={3}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    boxShadow: ' 0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {/* DropDown menu */}
                  <FormControl sx={{ width: '20%', marginBottom: '2.5rem' }}>
                    <InputLabel id='demo-simple-select-label'>
                      Sort by
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      // value={age}
                      label='SortBy'
                      defaultValue={10}
                      style={{ height: '2.2rem' }}
                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Newest</MenuItem>
                      <MenuItem value={20}>Oldest</MenuItem>
                    </Select>
                  </FormControl>
                  {appliedJobsApplications
                    .filter(
                      (jobApplication: IappliedJobsApplications) =>
                        jobApplication?.status < 5
                    )
                    .sort((a, b) => a?.status - b?.status)
                    .map((application) => {
                      return (
                        <CandidateJob
                          Application={application}
                          withDrawApplication={withDrawApplicationMutation}
                        />
                      );
                    })}

                  {/* {appliedJobsApplications.map(
                    (application: IappliedJobsApplications) => {
                      return (
                        <CandidateJob
                          Application={application}
                          withDrawApplication={withDrawApplication}
                        />
                      );
                    }
                  )} */}

                  <CustomPagination />
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    );
  } else {
    return <Redirect to='/' />;
  }
};

export default CandidateAppliedJobs;
