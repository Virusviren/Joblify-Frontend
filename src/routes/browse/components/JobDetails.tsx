import { Button, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CompanyBackground from '../../../static/icons/companyBackground.svg';
import CompanyLogo from '../../../static/icons/companyLogo.svg';
import { IJobs } from '../../../typings/jobs';
import ApplicationForm from './ApplicationForm';

interface IPROPS {
  activeJobItem: IJobs;
  filters: string[];
}

const JobDetails = ({ activeJobItem, filters }: IPROPS) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid container className='job-details'>
      <Grid container className='job-details-background'>
        <img
          src={CompanyLogo}
          alt='company logo'
          style={{
            width: '3rem',
            height: '3rem',
            padding: '0.8rem',
            border: '5px solid black',
            borderRadius: '10px',
            position: 'relative',
            top: '7.5rem',
            left: '2rem',
            backgroundColor: 'white',
          }}
        />
      </Grid>
      <Grid
        container
        paddingLeft={4}
        paddingRight={4}
        paddingBottom={4}
        style={{ backgroundColor: 'white', borderRadius: '0 0 10px 10px' }}
      >
        <Button
          variant='contained'
          color='primary'
          style={{
            borderRadius: '10px',
            padding: '0.5rem 3rem',
            textTransform: 'capitalize',

            margin: '2rem 0 2rem auto',
          }}
          onClick={() => setOpen(true)}
        >
          Apply
        </Button>

        <Grid container alignItems='center'>
          <Grid item xl={9} lg={8}>
            <h3>{activeJobItem.jobId}</h3>
          </Grid>
          <Grid item xl={3} lg={4}>
            <p style={{ color: '#686868' }}>Posted 8 days ago</p>
          </Grid>
        </Grid>
        <Grid container alignItems='center' marginTop={2} marginBottom={6}>
          <Grid item xl={9} lg={8}>
            <p>{activeJobItem.details.companyInfo.address}</p>
          </Grid>
          <Grid item xl={3} lg={4}>
            <p>{activeJobItem.applicationsReceived.length} Applicants</p>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems='center'
          marginBottom={6}
          style={{ border: '2px solid #e1e1e1', borderRadius: '10px' }}
        >
          <Grid item xl={3} lg={3} style={{ borderRight: '2px solid #e1e1e1' }}>
            <p style={{ padding: '1rem ', color: '#686868' }}>Experience</p>
            <h4 style={{ padding: '0 1rem 1rem' }}>
              {activeJobItem.experience}
            </h4>
          </Grid>
          <Grid item xl={3} lg={3} style={{ borderRight: '2px solid #e1e1e1' }}>
            <p style={{ padding: '1rem ', color: '#686868' }}>
              Seniority Level
            </p>
            <h4 style={{ padding: '0 1rem 1rem' }}>
              {activeJobItem.seniorityLevel}
            </h4>
          </Grid>
          <Grid item xl={3} lg={3}>
            <p style={{ padding: '1rem ', color: '#686868' }}>Job Type</p>
            <h4 style={{ padding: '0 1rem 1rem' }}>{activeJobItem.type}</h4>
          </Grid>
          <Grid item xl={3} lg={3} style={{ borderLeft: '2px solid #e1e1e1' }}>
            <p style={{ padding: '1rem ', color: '#686868' }}>Salary</p>
            <h4 style={{ padding: '0 1rem 1rem' }}>
              {activeJobItem.salary} / month
            </h4>
          </Grid>
        </Grid>
        <h3>Overview</h3>
        <p style={{ margin: '1.5rem 0' }}>{activeJobItem.overview}</p>
        <h3>Requirements</h3>
        <p style={{ margin: '1.5rem 0' }}>{activeJobItem.requirements}</p>
      </Grid>
      <ApplicationForm open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default JobDetails;
