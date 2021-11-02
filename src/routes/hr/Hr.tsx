import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  CircularProgress,
  Avatar,
} from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../static/icons/Logo.svg';
import SideMenu from './components/SideMenu';
import SearchIcon from '@mui/icons-material/Search';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import candidatePic from '../../static/icons/viren.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import { hrFilter } from '../../static/data/options';
import { Redirect } from 'react-router-dom';

import './Hr.css';

import Filter from '../../shared-components/filter/Filter';
import Candidate from './components/Candidate';
import CustomPagination from '../../shared-components/pagination/CustomPagination';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import axios from 'axios';
import { BASE_URL } from '../../utils/endpoints';
import { useMutation } from 'react-query';
import { getApplicationsList, getHr } from '../../features/Hr/hr.Slice';

const Hr = () => {
  const token = localStorage.getItem('token');
  const hrInfo = useAppSelector((state) => state.hr.hrInfo);
  const applicationList = useAppSelector((state) => state.hr.applicationsList);
  const dispatch = useAppDispatch();
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

  const getAllApplications = async (token: string) => {
    const response = await axios.get(`${BASE_URL}hr/allApplications`, {
      headers: { 'x-auth-token': token },
    });
    return response.data;
  };
  const getAllApplicationsMutation = useMutation(getAllApplications, {
    onSuccess: (data: any) => {
      dispatch(getApplicationsList(data));
    },
    onError: () => {},
  });

  useEffect(() => {
    token && getHrMutation.mutate(token);
    token && getAllApplicationsMutation.mutate(token);
  }, []);

  if (token !== '' && localStorage.getItem('userType') === 'Hr') {
    return (
      <Grid container>
        {getHrMutation.isLoading ? (
          <Grid container textAlign='center'>
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
                    showing total applications{'  '}{' '}
                    <span style={{ color: 'black' }}>
                      {hrInfo?.jobsPosted?.length}
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

                  {applicationList.map((application, index) => {
                    return <Candidate key={index} application={application} />;
                  })}

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

export default Hr;
