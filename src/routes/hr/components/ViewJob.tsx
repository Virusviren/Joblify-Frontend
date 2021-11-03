import React, { useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Divider, Dialog } from '@mui/material';
import deleteIcon from '../../../static/icons/delete.svg';
import addIcon from '../../../static/icons/addIcon.svg';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Me from '../../../static/icons/viren.jpg';
import Skills from './Skills';
import Button from '@mui/material/Button';
import CompanyLogo from '../../../static/icons/companyLogo.jpeg';
import { IJobs } from '../../../typings/jobs';
import UserActionDeleteJobHr from '../../../shared-components/userActionDeleteJobHr/UserActionDeleteJobHr';

interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
  job: IJobs;
  deleteJob: (id: string) => Promise<void>;
}

const ViewJob = ({ open, setOpen, job, deleteJob }: IPROPS) => {
  const [OpenUserConfirmation, setOpenUserConfirmation] = useState(false);
  return (
    <Dialog
      open={open}
      disableEscapeKeyDown={true}
      maxWidth='xl'
      BackdropProps={{
        style: {
          backdropFilter: 'blur(15px)',
          background: 'rgba(196, 196, 196, 0.5)',
        },
      }}
    >
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <h4>
              Job title{' '}
              <span style={{ color: '#686868' }}>{job?.jobTitle}</span>
            </h4>
          </Grid>
          <Grid item style={{ marginLeft: '30rem' }}>
            <h4>
              Job Id
              <span style={{ color: '#686868' }}>
                {' '}
                #{job._id?.toString()?.substring(0, 10)}
              </span>
            </h4>
          </Grid>
          <Grid item>
            <img
              src={deleteIcon}
              alt='close img'
              style={{ cursor: 'pointer', marginLeft: '1rem' }}
              onClick={() => {
                setOpen(false);
              }}
            />
          </Grid>
        </Grid>
      </DialogTitle>
      <Divider />
      <DialogContent style={{ padding: '1.5rem 0rem ', overflowX: 'hidden' }}>
        <Grid
          container
          alignItems='center'
          marginBottom={7}
          marginLeft={6}
          marginRight={6}
        >
          <Grid item xl={9} lg={9}>
            <p
              style={{
                fontWeight: 'bold',

                fontSize: 'large',
              }}
            >
              <span
                style={{
                  borderBottom: '4px solid #686868',
                  paddingBottom: '0.5rem',
                }}
              >
                Company Information
              </span>
            </p>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setOpen(false)}
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Edit
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          style={{
            marginBottom: '2rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
          gap={5}
        >
          <Grid item textAlign='center' xl={'auto'} lg={'auto'}>
            <img
              src={CompanyLogo}
              alt='avatar'
              style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: '#c4c4c4',
              }}
            />

            <p className='input-title' style={{ padding: '1rem 0' }}>
              Logo
            </p>
          </Grid>
          <Grid item xl={9} lg={9}>
            <Grid container>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Company Name</p>
                <h3 style={{ marginTop: '1rem' }}>
                  {job?.details?.companyInfo?.name}
                </h3>
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Address</p>
                <h3 style={{ marginTop: '1rem' }}>
                  {job?.details?.companyInfo?.address}
                </h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            fontSize: 'large',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <span
            style={{
              borderBottom: '4px solid #686868',
              paddingBottom: '0.5rem',
            }}
          >
            Job Overview
          </span>
        </p>

        <h3
          style={{
            marginBottom: '3rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          {job?.overview}
        </h3>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '3rem',
            fontSize: 'large',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <span
            style={{
              borderBottom: '4px solid #686868',
              paddingBottom: '0.5rem',
            }}
          >
            Job Requirements
          </span>
        </p>
        <h3
          style={{
            marginBottom: '3rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          {job?.requirements}
        </h3>
        <Grid container marginLeft={6} marginRight={6}>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Experience
            </h4>
            <h3>{job?.experience}</h3>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Senority Level
            </h4>
            <h3>{job?.seniorityLevel}</h3>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Job Type</h4>
            <h3>{job?.type}</h3>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Salary</h4>
            <h3>{job?.salary}/month</h3>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions style={{ padding: '1.5rem 3rem' }}>
        <Grid container alignItems='center' gap={6}>
          <Grid item>
            <Button
              variant='contained'
              color='success'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Job Status - Active
            </Button>
          </Grid>
          <Grid item>
            {' '}
            <Button
              variant='contained'
              color='error'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
              onClick={() => setOpenUserConfirmation(true)}
            >
              Remove
            </Button>
          </Grid>
          <UserActionDeleteJobHr
            title={'Are You Sure'}
            message={'Do you want to delete this job ?'}
            open={OpenUserConfirmation}
            setOpen={setOpenUserConfirmation}
            deleteJob={deleteJob}
            idOfJob={job?._id}
          />
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default ViewJob;
