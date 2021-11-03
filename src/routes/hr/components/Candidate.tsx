import React, { useState } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Avatar,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import candidatePic from '../../../static/icons/viren.jpg';
import RoundInfo from '../../../shared-components/roundInfo/RoundInfo';
import ViewApplication from './ViewApplication';

import { IappliedJobsApplications } from '../../../typings/appliedJobsApplications';
import moment from 'moment';
import UserActionConfirmationHr from '../../../shared-components/userActionHr/UserActionConfirmationHr';

interface IPROPS {
  application: IappliedJobsApplications;
  rejectApplication: (id: string) => Promise<void>;
  proccedTonextRound: (id: string, status: number) => Promise<void>;
}

const Candidate = ({
  application,
  rejectApplication,
  proccedTonextRound,
}: IPROPS) => {
  const [open, setOpen] = useState(false);
  const [openConfirmation, setOpenConfirmation] = useState(false);
  return (
    <Grid container padding={2} className='highlight-candidate'>
      <Grid item xl={'auto'} lg={'auto'}>
        {' '}
        {application?.candidateProfilePic ? (
          <img
            src={`${
              application.candidateProfilePic
            }?random_number=${new Date().getTime()}`}
            alt='Candidate_Image'
            style={{
              width: '4.5rem',

              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <Avatar color='primary' style={{ width: '4rem', height: '4rem' }}>
            {/* {  if(candidatePersonalInfo)return  candidatePersonalInfo.name} */}
            {application ? application?.personalInfo?.name![0] : ''}
          </Avatar>
        )}
      </Grid>
      <Grid item xl={6} lg={5} marginLeft={2}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {application?.personalInfo?.name} {application?.personalInfo?.surname}
          <span
            style={{
              color: '#707070',
              fontSize: '0.7rem',
              marginLeft: '1rem',
            }}
          >
            {application?.createdAt &&
              moment(application.createdAt).format('DD MMMM YYYY')}
          </span>
        </p>
        <p style={{ color: '#707070' }}>{application?.jobTitle}</p>
      </Grid>
      <Grid item xl={3} lg={3} textAlign='center'>
        <p style={{ fontWeight: 'bold', marginBottom: '1.3rem' }}>
          Round {application?.status}
        </p>
        {/* <RoundInfo /> */}
        {application?.status && <RoundInfo status={application.status} />}
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
          Reject
        </p>
        <CancelOutlinedIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='error'
          onClick={() => setOpenConfirmation(true)}
        />
      </Grid>
      <ViewApplication
        open={open}
        setOpen={setOpen}
        application={application}
        openConfirmation={openConfirmation}
        setOpenConfirmation={setOpenConfirmation}
        rejectApplication={rejectApplication}
        proccedTonextRound={proccedTonextRound}
      />
      <UserActionConfirmationHr
        title={'Are You Sure ?'}
        message={'Do you want to reject it.'}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
        rejectApplication={rejectApplication}
        idOfApplication={application?._id}
      />
    </Grid>
  );
};

export default Candidate;
