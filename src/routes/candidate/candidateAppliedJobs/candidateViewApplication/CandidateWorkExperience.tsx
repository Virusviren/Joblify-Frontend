import React from 'react';
import { Grid, Divider, Avatar } from '@mui/material';
import { WorkExperience } from '../../../../typings/appliedJobsApplications';
import moment from 'moment';

interface IPROPS {
  workExperience: WorkExperience;
}

const CandidateWorkExperience = ({ workExperience }: IPROPS) => {
  console.log(workExperience);

  return (
    <>
      <Grid
        container
        style={{
          marginBottom: '3.5rem',
          marginLeft: '3rem',
          marginRight: '3rem',
        }}
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item xl={10} lg={10}>
          <Grid container>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>Company Name</p>
              <h3 style={{ marginTop: '1rem' }}>
                {workExperience?.companyName}
              </h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>Position</p>
              <h3 style={{ marginTop: '1rem' }}>{workExperience?.position}</h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>From</p>
              <h3 style={{ marginTop: '1rem' }}>
                {' '}
                {moment(workExperience?.startingDate).format('MMMM YYYY')}
              </h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>To</p>
              <h3 style={{ marginTop: '1rem' }}>
                {' '}
                {moment(workExperience?.endingDate).format('MMMM YYYY')}
              </h3>
            </Grid>
            <Grid item xl={12} lg={12} paddingTop={4}>
              <p className='input-title'>Description</p>
              <h3 style={{ marginTop: '1rem' }}>
                {workExperience?.description}
              </h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CandidateWorkExperience;
