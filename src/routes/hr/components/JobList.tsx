import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  CircularProgress,
  Avatar,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../static/icons/Logo.svg';
import SideMenu from './SideMenu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import candidatePic from '../../../static/icons/viren.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import { jobFilter } from '../../../static/data/options';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import '../Hr.css';

import Filter from '../../../shared-components/filter/Filter';

import CustomPagination from '../../../shared-components/pagination/CustomPagination';
import Job from './Job';
import AddJob from './AddJob';
import { getJobList, getHr } from '../../../features/Hr/hr.Slice';
import { BASE_URL } from '../../../utils/endpoints';
import axios from 'axios';
import { useMutation } from 'react-query';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { PostJob } from '../../../typings/jobs';

const JobList = () => {
  const dispatch = useAppDispatch();
  const hrInfo = useAppSelector((state) => state.hr.hrInfo);
  const jobList = useAppSelector((state) => state.hr.jobList);
  const token = localStorage.getItem('token')!;
  const getHrDetails = async (token: string) => {
    const response = await axios.get(`${BASE_URL}hr/profile`, {
      headers: { 'x-auth-token': token },
    });
    return response.data;
  };
  const getHrMutation = useMutation(getHrDetails, {
    onSuccess: (data: any) => {
      dispatch(getHr(data));
    },
    onError: () => {},
  });
  const getAllJobList = async (token: string) => {
    const response = await axios.get(`${BASE_URL}hr/jobs`, {
      headers: { 'x-auth-token': token },
    });
    return response.data;
  };
  const getAllJobListMutation = useMutation(getAllJobList, {
    onSuccess: (data: any) => {
      dispatch(getJobList(data));
    },
    onError: () => {},
  });

  const deleteJob = async (id: string) => {
    await axios.delete(`${BASE_URL}hr/job/${id}`, {
      headers: { 'x-auth-token': token },
    });
    getAllJobListMutation.mutate(token);
  };
  const editJob = async (id: string, data: PostJob) => {
    await axios.patch(`${BASE_URL}hr/job/${id}`, data, {
      headers: { 'x-auth-token': token },
    });
  };

  const addJob = async (data: PostJob) => {
    console.log('token ', token);

    await axios.post(`${BASE_URL}hr/job`, data, {
      headers: { 'x-auth-token': token },
    });
    getAllJobListMutation.mutate(token);
  };

  const [open, setOpen] = useState(false);

  useEffect(() => {
    token && getHrMutation.mutate(token);
    token && getAllJobListMutation.mutate(token);
  }, []);

  return (
    <Grid container style={{ height: '100vh' }}>
      {getAllJobListMutation.isLoading ? (
        <Grid container textAlign='center' alignItems='center'>
          <CircularProgress size={60} sx={{ margin: '2rem auto' }} />
        </Grid>
      ) : (
        <>
          {' '}
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
              <Grid item>
                {/* searchIcon */}
                <SearchIcon style={{ color: '#686868', fontSize: '2rem' }} />
              </Grid>
              <Grid item xl={8} lg={7}>
                {/* search input field */}
                <input
                  type='text'
                  placeholder='Search jobs'
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
                {hrInfo?.profilePhoto ? (
                  <img
                    src={`${
                      hrInfo?.profilePhoto
                    }?random_number=${new Date().getTime()}`}
                    alt='Candidate_Image'
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <Avatar color='primary'>
                    {/* {  if(candidatePersonalInfo)return  candidatePersonalInfo.name} */}
                    {hrInfo ? hrInfo?.personalInfo?.name![0] : ''}
                  </Avatar>
                )}
              </Grid>
              <Grid item>
                {/* name and id */}
                <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  {hrInfo?.personalInfo?.name} {hrInfo?.personalInfo?.surname}
                </p>
                <p style={{ color: '#686868', fontWeight: 'bold' }}>
                  #{hrInfo?._id?.substring(0, 10)}
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
                    window.location.assign('/browse');
                  }}
                >
                  Logout
                </p>
              </Grid>
            </Grid>
            {/* For Applications and result tag */}
            <Grid container alignItems='center' gap={10} padding={3}>
              <Grid item>
                <h2>Jobs List</h2>
              </Grid>
              <Grid item>
                <p style={{ color: '#686868' }}>
                  showing total jobs{' '}
                  <span style={{ color: 'black' }}>{jobList?.length}</span>
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
                {/* <Filter filterName='Type of Jobs' filterOptions={jobFilter} /> */}
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
                <Grid
                  container
                  paddingLeft={4}
                  paddingRight={10}
                  paddingTop={2}
                >
                  {/* DropDown menu */}
                  <Grid item xl={10} lg={10}>
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
                  </Grid>
                  <Grid item xl={2} lg={2}>
                    <Button
                      variant='contained'
                      color='primary'
                      style={{
                        borderRadius: '10px',
                        padding: '0.5rem 2.5rem',

                        textTransform: 'capitalize',
                      }}
                      startIcon={<AddCircleOutlineIcon />}
                      onClick={() => setOpen(true)}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>

                {jobList?.map((job) => (
                  <Job
                    job={job}
                    deleteJob={deleteJob}
                    editJob={editJob}
                    getAllJobListMutation={getAllJobListMutation}
                  />
                ))}

                <CustomPagination />
              </Grid>
            </Grid>
          </Grid>
          <AddJob open={open} setOpen={setOpen} addJob={addJob} />
        </>
      )}
    </Grid>
  );
};

export default JobList;
