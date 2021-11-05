import React, { useEffect, useState } from 'react';
import { Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import UserActionDeleteJobHr from '../../../shared-components/userActionDeleteJobHr/UserActionDeleteJobHr';
import ViewJob from './ViewJob';
import { IJobs, PostJob } from '../../../typings/jobs';
import moment from 'moment';

interface IPROPS {
  job: IJobs;
  deleteJob: (id: string) => Promise<void>;
  editJob: (id: string, data: PostJob) => Promise<void>;
  getAllJobListMutation: any;
}

const Job = ({ job, deleteJob, editJob, getAllJobListMutation }: IPROPS) => {
  const [open, setOpen] = useState(false);

  const [OpenUserConfirmation, setOpenUserConfirmation] = useState(false);
  return (
    <Grid container padding={2} className='highlight-candidate'>
      <Grid item xl={3} lg={4} marginLeft={2}>
        <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {job?.jobTitle}
          <span
            style={{
              color: '#707070',
              fontSize: '0.7rem',
              marginLeft: '1rem',
            }}
          >
            {job?.createdAt && moment(job.createdAt).format('DD MMMM YYYY')}
          </span>
        </p>
        <p style={{ color: '#707070' }}>{job?.details.companyInfo.name}</p>
      </Grid>
      <Grid item xl={6} lg={5} textAlign='center'>
        <p style={{ fontWeight: 'bold', marginBottom: '1.3rem' }}>
          Applications Received
        </p>
        <p style={{ fontWeight: 'bold' }}>{job?.applicationsReceived.length}</p>
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
          Remove
        </p>
        <CancelOutlinedIcon
          style={{ fontSize: '2rem', cursor: 'pointer' }}
          color='error'
          onClick={() => setOpenUserConfirmation(true)}
        />
      </Grid>
      <ViewJob
        open={open}
        setOpen={setOpen}
        job={job}
        deleteJob={deleteJob}
        editJob={editJob}
        getAllJobListMutation={getAllJobListMutation}
      />
      <UserActionDeleteJobHr
        title={'Are You Sure'}
        message={'Do you want to delete this job ?'}
        open={OpenUserConfirmation}
        setOpen={setOpenUserConfirmation}
        deleteJob={deleteJob}
        idOfJob={job?._id}
      />
    </Grid>
  );
};

export default Job;
