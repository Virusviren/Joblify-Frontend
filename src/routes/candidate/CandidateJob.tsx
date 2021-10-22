import React, { useState } from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CompanyLogo from '../../static/icons/companyLogo.jpeg';
import RoundInfo from '../../shared-components/roundInfo/RoundInfo';
import CandidateViewApplication from './CandidateViewApplication';
import UserActionConfirmation from '../../shared-components/userAction/UserActionConfirmation';

import { IappliedJobsApplications } from '../../typings/appliedJobsApplications';
import moment from 'moment';
interface IPROPS {
  Application: IappliedJobsApplications;
}

const CandidateJob = ({ Application }: IPROPS) => {
  console.log(Application);
  const {
    _id,
    jobId,
    jobTitle,
    personalInfo,
    skills,
    status,
    candidateId,
    cv,
    coverLetter,
    education,
    workExperience,
    createdAt,
  } = Application;

  const [open, setOpen] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  return (
    <Grid container padding={2} className='highlight-candidate'>
      <Grid item xl={'auto'} lg={'auto'}>
        {' '}
        <img
          src={CompanyLogo}
          alt='viren'
          style={{ width: '4.5rem', borderRadius: '50%' }}
        />
      </Grid>
      <Grid item xl={6} lg={5} marginLeft={2}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Strive
          <span
            style={{
              color: '#707070',
              fontSize: '0.7rem',
              marginLeft: '1rem',
            }}
          >
            {createdAt && moment(createdAt).format('DD MMMM YYYY')}
            {/* {format(createdAt, 'dd MMMM dd')} */}
          </span>
        </p>
        <p style={{ color: '#707070' }}>{jobTitle}</p>
      </Grid>
      <Grid item xl={3} lg={3} textAlign='center'>
        <p style={{ fontWeight: 'bold', marginBottom: '1.3rem' }}>
          Round {status}
        </p>
        <RoundInfo status={status} />
      </Grid>
      <Grid item xl={1} lg={1} textAlign='center'>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          View
        </p>

        <VisibilityIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='primary'
          onClick={() => setOpen(true)}
        />
      </Grid>
      <Grid item xl={1} lg={1} textAlign='center'>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Withdraw
        </p>
        <CancelOutlinedIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='error'
          onClick={() => setOpenConfirmation(true)}
        />
      </Grid>
      <CandidateViewApplication
        open={open}
        setOpen={setOpen}
        applicationDetails={Application}
      />
      <UserActionConfirmation
        title={'Are You Sure ?'}
        message={'Do you want to withdraw your application?'}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
      />
    </Grid>
  );
};

export default CandidateJob;
