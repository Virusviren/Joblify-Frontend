import React, { useState } from 'react';
import { WorkExperience } from '../../../../typings/appliedJobsApplications';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
  TextField,
  dividerClasses,
} from '@mui/material';
import DateAdapter from '@mui/lab/AdapterMoment';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { levels } from '../../../../static/data/educationLevel';
import { DesktopDatePicker, LocalizationProvider } from '@mui/lab';
import { BASE_URL } from '../../../../utils/endpoints';
import axios from 'axios';
import moment from 'moment';
interface IPROPS {
  item: WorkExperience;
  getUserMutation: any;
  setEditWorkExperience: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditWorkExperience = ({
  item,
  getUserMutation,
  setEditWorkExperience,
}: IPROPS) => {
  const [companyName, setCompanyName] = useState(item.companyName);
  const [dateTo, setDateTo] = useState<Date | string | null>(
    moment(item.endingDate).format('yyyy')
  );
  const [dateFrom, setDateFrom] = useState<Date | string | null>(
    moment(item.startingDate).format('yyyy')
  );
  const [position, setPosition] = useState(item.position);
  const [description, setDescription] = useState(item.description);
  const token = localStorage.getItem('token')!;
  const addWorkExperience = async (
    setEditWorkExperience: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      await axios.patch(
        `${BASE_URL}candidate/profile/edit-workExperience/${item._id}`,
        {
          companyName: companyName,
          position: position,
          description: description,
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
      setEditWorkExperience(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid
      container
      padding={3}
      alignItems='center'
      justifyContent='space-between'
    >
      {' '}
      <Grid item xl={2} lg={2} paddingBottom={3}>
        {' '}
        <p className='input-title'>Company name</p>
        <div style={{ marginTop: '1rem' }}>
          {' '}
          <input
            className='submit-application-input'
            type='text'
            name='companyName'
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <p className='input-title'>Position</p>
        <div style={{ marginTop: '1rem' }}>
          {' '}
          <input
            className='submit-application-input'
            type='text'
            name='position'
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <p className='input-title'>From</p>
        <div style={{ marginTop: '1rem' }}>
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
            addWorkExperience(setEditWorkExperience);
          }}
        />
      </Grid>
      <Grid item paddingBottom={3}>
        {' '}
        <CancelOutlinedIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='error'
          onClick={() => setEditWorkExperience(false)}
        />
      </Grid>
      <Grid item xl={12} lg={12} paddingBottom={3}>
        {' '}
        <p className='input-title'>Description</p>
        <div style={{ marginTop: '1rem' }}>
          <textarea
            rows={5}
            cols={100}
            className='submit-application-input'
            //   type='text'
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default EditWorkExperience;
