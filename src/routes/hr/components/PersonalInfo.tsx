import {
  Grid,
  Button,
  CircularProgress,
  Avatar,
  IconButton,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import EditIcon from '@mui/icons-material/Edit';
import Logo from '../../../static/icons/Logo.svg';
import SideMenu from './SideMenu';

import candidatePic from '../../../static/icons/viren.jpg';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import '../Hr.css';
import { Redirect } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import axios from 'axios';
import { BASE_URL } from '../../../utils/endpoints';
import { useMutation } from 'react-query';
import { getHr } from '../../../features/Hr/hr.Slice';

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
const Input = styled('input')({
  display: 'none',
});
interface data {
  name?: string;
  surname?: string;
  mobileNumber?: string;
}

const PersonalInfo = () => {
  const token = localStorage.getItem('token')!;
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
      console.log(data);

      setData({
        name: data.personalInfo.name,
        surname: data.personalInfo.surname,
        mobileNumber: data.personalInfo.mobileNumber,
      });
    },
    onError: () => {},
  });

  const uploadToServer = async (imageToUpload: FormData) => {
    console.log(imageToUpload.get('image'));

    await axios.patch(`${BASE_URL}hr/profile-photo/edit`, imageToUpload, {
      headers: { 'x-auth-token': token },
    });
    await window.location.reload();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    let imageToUpload = new FormData();
    imageToUpload.append('image', e.target.files![0]);
    uploadToServer(imageToUpload);
  };
  useEffect(() => {
    token && getHrMutation.mutate(token);
  }, []);
  const [data, setData] = useState({
    name: '',
    surname: '',
    mobileNumber: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const editInfo = async (data: data) => {
    console.log(data);

    await axios.patch(`${BASE_URL}hr/profile/edit`, data, {
      headers: { 'x-auth-token': token },
    });
    getHrMutation.mutate(token);
  };
  const [edit, setEdit] = useState(false);

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
                <Grid item xl={8} lg={7}>
                  <h1>Personal Info</h1>
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
                      {hrInfo ? data?.name![0] : ''}
                    </Avatar>
                  )}
                </Grid>
                <Grid item>
                  {/* name and id */}
                  <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    {data?.name} {data?.surname}
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
              <Grid container alignItems='center' gap={5} padding={3}>
                <Grid
                  item
                  xl={3}
                  lg={3}
                  style={{
                    backgroundColor: 'white',
                    padding: '3rem',
                    borderRadius: '10px',
                    boxShadow: ' 0px 4px 20px 2px rgba(0, 0, 0, 0.1)',
                  }}
                  textAlign='center'
                >
                  <StyledBadge
                    color='primary'
                    badgeContent={
                      <label htmlFor='icon-button-file'>
                        <Input
                          accept='image/*'
                          id='icon-button-file'
                          type='file'
                          onChange={handleImageUpload}
                        />
                        <IconButton
                          color='secondary'
                          aria-label='upload picture'
                          component='span'
                        >
                          <EditIcon />
                        </IconButton>
                      </label>
                    }
                  >
                    {hrInfo?.profilePhoto ? (
                      <img
                        src={`${
                          hrInfo?.profilePhoto
                        }?random_number=${new Date().getTime()}`}
                        alt='Candidate_Image'
                        style={{
                          width: '10rem',
                          height: '10rem',
                          borderRadius: '50%',
                          margin: '0 auto 2rem',
                          objectFit: 'cover',
                        }}
                      />
                    ) : (
                      <Avatar
                        color='primary'
                        style={{
                          width: '10rem',
                          height: '10rem',
                          margin: '0 auto 2rem',
                        }}
                      >
                        {/* {  if(candidatePersonalInfo)return  candidatePersonalInfo.name} */}
                        {hrInfo ? hrInfo.personalInfo?.name![0] : ''}
                      </Avatar>
                    )}
                  </StyledBadge>

                  <h2 style={{ marginBottom: '1rem' }}>{data.name}</h2>
                  <h3 style={{ color: '#707070' }}>
                    User ID - #{hrInfo?._id?.substring(0, 5)}
                  </h3>
                </Grid>
                <Grid
                  item
                  xl={5}
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
                        name='name'
                        value={data.name}
                        readOnly={!edit}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xl={6} lg={6}>
                      <p className='input-title'>Last name</p>
                      <input
                        className='submit-application-input'
                        type='text'
                        name='surname'
                        value={data.surname}
                        readOnly={!edit}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} marginTop={6} paddingRight={4}>
                      <p className='input-title'>Mobile number</p>
                      <input
                        className='submit-application-input'
                        type='text'
                        name='mobileNumber'
                        value={data.mobileNumber}
                        readOnly={!edit}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xl={6} lg={6} marginTop={6}>
                      <p className='input-title'>Email</p>
                      <input
                        className='submit-application-input'
                        type='text'
                        value={hrInfo.email}
                        readOnly
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={3}
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
                      value={hrInfo.workDetails?.position}
                      readOnly
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} marginTop={6}>
                    <p className='input-title'>Company</p>
                    <input
                      className='submit-application-input'
                      type='text'
                      value={hrInfo.workDetails?.companyName}
                      readOnly
                    />
                  </Grid>
                </Grid>
                <div style={{ margin: '0 0 1rem auto', paddingRight: '8rem' }}>
                  {!edit ? (
                    <Button
                      variant='contained'
                      color='primary'
                      style={{
                        borderRadius: '10px',
                        padding: '0.5rem 3rem',
                        textTransform: 'capitalize',
                        fontSize: '1rem',
                      }}
                      onClick={() => {
                        setEdit(true);
                      }}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      variant='contained'
                      color='success'
                      style={{
                        borderRadius: '10px',
                        padding: '0.5rem 3rem',
                        textTransform: 'capitalize',
                        color: 'white',
                        fontSize: '1rem',
                      }}
                      onClick={() => {
                        setEdit(false);
                        editInfo(data);
                      }}
                    >
                      Save Changes
                    </Button>
                  )}
                </div>
              </Grid>

              {/* For filter and results of the component */}
            </Grid>
          </>
        )}
      </Grid>
    );
  } else {
    return <Redirect to='/' />;
  }
};

export default PersonalInfo;
