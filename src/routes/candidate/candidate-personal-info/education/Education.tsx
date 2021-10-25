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
import AddEducation from './AddEducation';
import { Icandidateinfo } from '../../../../typings/candidate';
import moment from 'moment';
import axios from 'axios';
import { BASE_URL } from '../../../../utils/endpoints';
import EditEducation from './EditEducation';
interface IPROPS {
  getUserMutation: any;
  candidateInfo: Icandidateinfo;
}

const Education = ({ getUserMutation, candidateInfo }: IPROPS) => {
  const [addEducation, setAddEducation] = useState(false);
  const [editEducation, setEditEducation] = useState(false);

  const [editId, setEditId] = useState('');

  const token = localStorage.getItem('token')!;
  const deleteEducation = async (itemId: string) => {
    try {
      await axios.delete(
        `${BASE_URL}candidate/profile/edit-education/${itemId}`,

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
          <h3>Education</h3>
        </Grid>
        <Grid item xl={1} lg={2}>
          {!addEducation && (
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
              onClick={() => setAddEducation(true)}
            >
              Add
            </Button>
          )}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      {addEducation ? (
        <AddEducation
          setAddEducation={setAddEducation}
          getUserMutation={getUserMutation}
        />
      ) : (
        <Grid container padding={3} gap={8}>
          {candidateInfo.education?.map((item) => {
            return (
              <Grid container alignItems='center'>
                {' '}
                {editEducation ? (
                  item._id === editId && (
                    <EditEducation
                      setEditEducation={setEditEducation}
                      getUserMutation={getUserMutation}
                      item={item}
                    />
                  )
                ) : (
                  <>
                    {' '}
                    <Grid item xl={3} lg={3} paddingBottom={3}>
                      {' '}
                      <p className='input-title'>Level of education</p>
                      <h3 style={{ marginTop: '1rem' }}>{item.level}</h3>
                    </Grid>
                    <Grid item xl={3} lg={3} paddingBottom={3}>
                      {' '}
                      <p className='input-title'>School/University Name</p>
                      <h3 style={{ marginTop: '1rem' }}>
                        {item.universityName}
                      </h3>
                    </Grid>
                    <Grid item xl={2} lg={2} paddingBottom={3}>
                      {' '}
                      <p className='input-title'>From</p>
                      <h3 style={{ marginTop: '1rem' }}>
                        {moment(item.startingDate).format('yyyy')}
                      </h3>
                    </Grid>
                    <Grid item xl={2} lg={2} paddingBottom={3}>
                      {' '}
                      <p className='input-title'>To</p>
                      <h3 style={{ marginTop: '1rem' }}>
                        {moment(item.endingDate).format('yyyy')}
                      </h3>
                    </Grid>
                    <Grid item xl={1} lg={1} paddingBottom={3}>
                      {' '}
                      <EditIcon
                        style={{ fontSize: '2rem', cursor: 'pointer' }}
                        color='primary'
                        onClick={() => {
                          setEditEducation(true);
                          setEditId(item._id);
                        }}
                      />
                    </Grid>
                    <Grid item xl={1} lg={1} paddingBottom={3}>
                      {' '}
                      <CancelOutlinedIcon
                        style={{ fontSize: '2rem', cursor: 'pointer' }}
                        color='error'
                        onClick={() => {
                          deleteEducation(item._id);
                        }}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

export default Education;
