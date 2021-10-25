import React from 'react';
import { Grid, Divider, Avatar } from '@mui/material';
import { Education } from '../../../../typings/appliedJobsApplications';
import moment from 'moment';
interface IPROPS {
  educationDetails: Education;
}

const CandidateEducation = ({ educationDetails }: IPROPS) => {
  console.log(educationDetails);

  return (
    <>
      <Grid
        container
        style={{
          marginBottom: '3.5rem',
          marginLeft: '3rem',
          marginRight: '3rem',
        }}
        alignItems={'center'}
        justifyContent='space-between'
      >
        <Grid item xl={10} lg={10}>
          <Grid container>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>Level of education</p>
              <h3 style={{ marginTop: '1rem' }}>{educationDetails.level}</h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>School/University Name</p>
              <h3 style={{ marginTop: '1rem' }}>
                {educationDetails.universityName}
              </h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>From</p>
              <h3 style={{ marginTop: '1rem' }}>
                {moment(educationDetails?.startingDate).format('MMMM YYYY')}
              </h3>
            </Grid>
            <Grid item xl={3} lg={3}>
              <p className='input-title'>To</p>
              <h3 style={{ marginTop: '1rem' }}>
                {moment(educationDetails?.endingDate).format('MMMM YYYY')}
              </h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CandidateEducation;
