import React, { useState } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddWorkExperience from './AddWorkExperience';
import { Icandidateinfo } from '../../../../typings/candidate';
import moment from 'moment';
import EditWorkExperience from './EditWorkExperience';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/endpoints';
interface IPROPS {
  getUserMutation: any;
  candidateInfo: Icandidateinfo;
}
const WorkExperience = ({ getUserMutation, candidateInfo }: IPROPS) => {
  const [addWorkExperience, setAddWorkExperience] = useState(false);
  const [editWorkExperience, setEditWorkExperience] = useState(false);
  const [editId, setEditId] = useState('');

  const token = localStorage.getItem('token')!;
  const deleteWorkExperience = async (itemId: string) => {
    try {
      await axios.delete(
        `${BASE_URL}candidate/profile/edit-workExperience/${itemId}`,

        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      await getUserMutation.mutate(token);
    } catch (error) {
      console.log(error);
    }
  };

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
        <Grid item xl={11} lg={10}>
          <h3>Work Experience</h3>
        </Grid>
        <Grid item xl={1} lg={2} textAlign='end'>
          {' '}
          {!addWorkExperience && (
            <Button
              variant='contained'
              color='primary'
              onClick={() => setAddWorkExperience(true)}
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
            >
              Add
            </Button>
          )}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>

      {addWorkExperience ? (
        <AddWorkExperience
          setAddWorkExperience={setAddWorkExperience}
          getUserMutation={getUserMutation}
        />
      ) : (
        <Grid container padding={3} gap={8}>
          {candidateInfo.workExperience?.map((item) => (
            <Grid container alignItems='center'>
              {editWorkExperience ? (
                item._id === editId && (
                  <EditWorkExperience
                    item={item}
                    getUserMutation={getUserMutation}
                    setEditWorkExperience={setEditWorkExperience}
                  />
                )
              ) : (
                <>
                  <Grid item xl={3} lg={3} paddingBottom={3}>
                    {' '}
                    <p className='input-title'>Company name</p>
                    <h3 style={{ marginTop: '1rem' }}>{item.companyName}</h3>
                  </Grid>
                  <Grid item xl={3} lg={3} paddingBottom={3}>
                    {' '}
                    <p className='input-title'>Position</p>
                    <h3 style={{ marginTop: '1rem' }}>{item.position}</h3>
                  </Grid>
                  <Grid item xl={2} lg={2} paddingBottom={3}>
                    {' '}
                    <p className='input-title'>From</p>
                    <h3 style={{ marginTop: '1rem' }}>
                      {moment(item.startingDate).format('YYYY')}
                    </h3>
                  </Grid>
                  <Grid item xl={2} lg={2} paddingBottom={3}>
                    {' '}
                    <p className='input-title'>To</p>
                    <h3 style={{ marginTop: '1rem' }}>
                      {moment(item.endingDate).format('YYYY')}
                    </h3>
                  </Grid>
                  <Grid item xl={1} lg={1} paddingBottom={3}>
                    {' '}
                    <EditIcon
                      style={{ fontSize: '2rem', cursor: 'pointer' }}
                      color='primary'
                      onClick={() => {
                        setEditId(item._id);
                        setEditWorkExperience(true);
                      }}
                    />
                  </Grid>
                  <Grid item xl={1} lg={1} paddingBottom={3}>
                    {' '}
                    <CancelOutlinedIcon
                      style={{ fontSize: '2rem', cursor: 'pointer' }}
                      color='error'
                      onClick={() => {
                        deleteWorkExperience(item._id);
                      }}
                    />
                  </Grid>
                  <Grid item xl={12} lg={12} paddingBottom={3}>
                    {' '}
                    <p className='input-title'>Description</p>
                    <h3 style={{ marginTop: '1rem' }}>{item.description}</h3>
                  </Grid>
                </>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default WorkExperience;
