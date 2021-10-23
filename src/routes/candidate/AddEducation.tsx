import React, { useState } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
  TextField,
} from '@mui/material';
import DateAdapter from '@mui/lab/AdapterMoment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { levels } from '../../static/data/educationLevel';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { BASE_URL } from '../../utils/endpoints';
import axios from 'axios';
interface IPROPS {
  setAddEducation: React.Dispatch<React.SetStateAction<boolean>>;
  getUserMutation: any;
}

const AddEducation = ({ setAddEducation, getUserMutation }: IPROPS) => {
  const [educationLevel, setEducationLevel] = useState('');
  const [dateTo, setDateTo] = useState<Date | null>(null);
  const [dateFrom, setDateFrom] = useState<Date | null>(null);
  const [schoolName, setSchoolName] = useState('');

  const token = localStorage.getItem('token')!;
  const addEducation = async (
    setAddEducation: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      await axios.post(
        `${BASE_URL}candidate/profile/edit-education`,
        {
          level: educationLevel,
          universityName: schoolName,
          startingDate: dateFrom,
          endingDate: dateTo,
        },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      await getUserMutation.mutate(token);
      setAddEducation(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid
      container
      alignItems='center'
      padding={3}
      justifyContent='space-between'
    >
      {' '}
      <Grid item xl={2} lg={2} paddingBottom={3}>
        {' '}
        <p className='input-title'>Level of education</p>
        <div style={{ marginTop: '1rem' }}>
          {' '}
          <FormControl fullWidth>
            <Select
              name='educationLevel'
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={educationLevel}
              onChange={(e) => {
                setEducationLevel(e.target.value);
              }}
            >
              {levels.map((country) => {
                return <MenuItem value={country}>{country}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <p className='input-title'>School/University Name</p>
        <div style={{ marginTop: '1rem' }}>
          {' '}
          <input
            className='submit-application-input'
            type='text'
            name='name'
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
        </div>
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <p className='input-title'>From</p>
        <div style={{ marginTop: '1rem' }}>
          {' '}
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              views={['year']}
              inputFormat='yyyy'
              value={dateFrom}
              onChange={(newValue) => {
                setDateFrom(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} name='dateOfBirth' />
              )}
            />
          </LocalizationProvider>
        </div>
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <p className='input-title'>To</p>
        <div style={{ marginTop: '1rem' }}>
          {' '}
          <LocalizationProvider dateAdapter={DateAdapter}>
            <DesktopDatePicker
              views={['year']}
              inputFormat='yyyy'
              value={dateTo}
              onChange={(newValue) => {
                setDateTo(newValue);
              }}
              renderInput={(params) => (
                <TextField {...params} name='dateOfBirth' />
              )}
            />
          </LocalizationProvider>
        </div>
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <CheckCircleOutlineIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='success'
          onClick={() => {
            addEducation(setAddEducation);
          }}
        />
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <CancelOutlinedIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='error'
          onClick={() => setAddEducation(false)}
        />
      </Grid>
    </Grid>
  );
};

export default AddEducation;
