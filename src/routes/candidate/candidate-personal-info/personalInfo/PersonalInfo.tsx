import React, { useState, useEffect } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
  Avatar,
  IconButton,
} from '@mui/material';
import { countries } from '../../../../static/data/countries';
import DateAdapter from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { BASE_URL } from '../../../../utils/endpoints';
import { useMutation } from 'react-query';
import axios from 'axios';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useAppSelector } from '../../../../app/hooks';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { PersonalInfo as IPERSONALINFO } from '../../../../typings/appliedJobsApplications';
import moment from 'moment';
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
const Input = styled('input')({
  display: 'none',
});

interface IPORPS {
  getUserMutation: any;
}
const PersonalInfo = ({ getUserMutation }: IPORPS) => {
  const candidateInfo = useAppSelector(
    (state) => state.candidate.candidateInfo
  );
  const token = localStorage.getItem('token')!;
  const uploadToServer = async (imageToUpload: FormData) => {
    console.log(imageToUpload.get('image'));

    await axios.patch(
      `${BASE_URL}candidate/profile/edit/profile-photo`,
      imageToUpload,
      {
        headers: { 'x-auth-token': token },
      }
    );
    await window.location.reload();
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    let imageToUpload = new FormData();
    // e.target !== undefined &&
    //   e.target.files !== undefined &&
    //   e.target.files?.length !== undefined &&
    //   e.target.files.length > 0 &&
    imageToUpload.append('image', e.target.files![0]);
    uploadToServer(imageToUpload);
  };

  const [edit, setEdit] = useState(false);
  const [personalData, setPersonalData] = useState({
    name: candidateInfo.personalInfo?.name,
    surname: candidateInfo.personalInfo?.surname,
    address: candidateInfo.personalInfo?.address,
    mobileNumber: candidateInfo.personalInfo?.mobileNumber,
  });

  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);
  const [citizenship, setCitizenship] = useState(
    candidateInfo.personalInfo?.citizenship
  );
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPersonalData({ ...personalData, [e.target.name]: e.target.value });
  };

  const editPersonalInfo = async (formData: IPERSONALINFO) => {
    const response = await axios.patch(
      `${BASE_URL}candidate/profile/edit-personalInformation`,
      formData,
      {
        headers: { 'x-auth-token': token },
      }
    );
    return response.data;
  };

  const mutation = useMutation(editPersonalInfo, {
    onSuccess: (data: any) => {
      getUserMutation.mutate(token);
    },
    onError: () => {},
  });

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
        <Grid item xl={edit ? 9 : 11} lg={edit ? 8 : 10}>
          <h3>Personal information</h3>
        </Grid>
        <Grid item xl={edit ? 3 : 1} lg={edit ? 4 : 2} textAlign='end'>
          {!edit && (
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </Button>
          )}
          {edit && (
            <Button
              variant='contained'
              color='success'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 2.5rem',
                textTransform: 'capitalize',
                marginRight: '1rem',
              }}
              onClick={() => {
                setEdit(false);
                mutation.mutate({ ...personalData, dateOfBirth, citizenship });
              }}
            >
              Save
            </Button>
          )}
          {edit && (
            <Button
              variant='contained'
              color='error'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 2.5rem',
                textTransform: 'capitalize',
              }}
              onClick={() => {
                setEdit(false);
              }}
            >
              Cancel
            </Button>
          )}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      <Grid container padding={3} gap={8}>
        <Grid item>
          {' '}
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
            {/* Avatar img */}
            {candidateInfo.profilePhoto ? (
              <img
                // src={candidateInfo?.profilePhoto}
                src={`${
                  candidateInfo?.profilePhoto
                }?random_number=${new Date().getTime()}`}
                alt='Candidate_Image'
                style={{
                  width: '9rem',
                  height: '9rem',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            ) : (
              <Avatar color='primary' style={{ width: '9rem' }}>
                {/* {  if(candidatePersonalInfo)return  candidatePersonalInfo.name} */}
                {candidateInfo ? candidateInfo?.personalInfo?.name![0] : ''}
              </Avatar>
            )}
          </StyledBadge>
        </Grid>
        <Grid item xl={10} lg={9}>
          <Grid container>
            {' '}
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>First name</p>
              {edit ? (
                <input
                  className='submit-application-input'
                  type='text'
                  name='name'
                  value={personalData.name}
                  onChange={handleChange}
                />
              ) : (
                <h3 style={{ marginTop: '1rem' }}>
                  {candidateInfo.personalInfo?.name}
                </h3>
              )}
            </Grid>
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>Last name</p>
              {edit ? (
                <input
                  className='submit-application-input'
                  type='text'
                  name='surname'
                  value={personalData.surname}
                  onChange={handleChange}
                />
              ) : (
                <h3 style={{ marginTop: '1rem' }}>
                  {' '}
                  {candidateInfo.personalInfo?.surname}
                </h3>
              )}
            </Grid>
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>Date of birth</p>
              {edit ? (
                <LocalizationProvider dateAdapter={DateAdapter}>
                  <DesktopDatePicker
                    inputFormat='DD/MM/yyyy'
                    value={dateOfBirth}
                    onChange={(newValue) => {
                      setDateOfBirth(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} name='dateOfBirth' />
                    )}
                  />
                </LocalizationProvider>
              ) : (
                <h3 style={{ marginTop: '1rem' }}>
                  {' '}
                  {candidateInfo.personalInfo?.dateOfBirth !== undefined
                    ? moment(candidateInfo.personalInfo?.dateOfBirth).format(
                        'DD/MM/YYYY'
                      )
                    : ''}
                </h3>
              )}
            </Grid>
            <Grid item xl={3} lg={3} paddingBottom={3}>
              {' '}
              <p className='input-title'>Citizenship</p>
              {edit ? (
                <FormControl fullWidth>
                  <Select
                    name='citizenship'
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={citizenship}
                    onChange={(e) => {
                      setCitizenship(e.target.value);
                    }}
                  >
                    {countries.map((country) => {
                      return <MenuItem value={country}>{country}</MenuItem>;
                    })}
                  </Select>
                </FormControl>
              ) : (
                <h3 style={{ marginTop: '1rem' }}>
                  {candidateInfo.personalInfo?.citizenship !== undefined
                    ? candidateInfo.personalInfo?.citizenship
                    : ''}
                </h3>
              )}
            </Grid>
            <Grid item xl={6} lg={6}>
              {' '}
              <p className='input-title'>Address</p>
              {edit ? (
                <input
                  className='submit-application-input'
                  type='text'
                  name='address'
                  value={personalData.address}
                  onChange={handleChange}
                />
              ) : (
                <h3 style={{ marginTop: '1rem' }}>
                  {' '}
                  {candidateInfo.personalInfo?.address !== undefined
                    ? candidateInfo.personalInfo?.address
                    : ''}
                </h3>
              )}
            </Grid>
            <Grid item xl={3} lg={3}>
              {' '}
              <p className='input-title'>Mobile number</p>
              {edit ? (
                <input
                  className='submit-application-input'
                  type='text'
                  name='mobileNumber'
                  value={personalData.mobileNumber}
                  onChange={handleChange}
                />
              ) : (
                <h3 style={{ marginTop: '1rem' }}>
                  {candidateInfo.personalInfo?.mobileNumber !== undefined
                    ? candidateInfo.personalInfo?.mobileNumber
                    : ''}
                </h3>
              )}
            </Grid>
            <Grid item xl={3} lg={3}>
              {' '}
              <p className='input-title'>Email</p>
              <h3 style={{ marginTop: '1rem' }}>{candidateInfo.email}</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonalInfo;
