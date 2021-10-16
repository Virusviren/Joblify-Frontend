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
import CompanyLogo from '../../../static/icons/companyLogo.svg';
import UserActionConfirmation from '../../../shared-components/userAction/UserActionConfirmation';

interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
}

const ViewJob = ({ open, setOpen }: IPROPS) => {
  const [OpenUserConfirmation, setOpenUserConfirmation] = useState(false);
  return (
    <Dialog open={open} disableEscapeKeyDown={true} maxWidth='lg'>
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <h4>
              Job title{' '}
              <span style={{ color: '#686868' }}>
                Senior Frontend Developer
              </span>
            </h4>
          </Grid>
          <Grid item style={{ marginLeft: '5rem' }}>
            <h4>
              Job Id
              <span style={{ color: '#686868' }}> #12345678</span>
            </h4>
          </Grid>
          <Grid item>
            <img
              src={deleteIcon}
              alt='close img'
              style={{ cursor: 'pointer' }}
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
          <Grid item xl={10} lg={10}>
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
                <h3 style={{ marginTop: '1rem' }}>Slack Inc.</h3>
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Address</p>
                <h3 style={{ marginTop: '1rem' }}>Lublin, Poland</h3>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          molestiae consectetur ducimus repellendus, ipsa dolor, perspiciatis
          sapiente illum officia voluptas odit, corporis adipisci maiores
          architecto veritatis fuga quas animi pariatur. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quia molestiae consectetur ducimus
          repellendus, ipsa dolor, perspiciatis sapiente illum officia voluptas
          odit, corporis adipisci maiores architecto veritatis fuga quas animi
          pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia molestiae consectetur ducimus repellendus, ipsa dolor,
          perspiciatis sapiente illum officia voluptas odit, corporis adipisci
          maiores architecto veritatis fuga quas animi pariatur.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          molestiae consectetur ducimus repellendus, ipsa dolor, perspiciatis
          sapiente illum officia voluptas odit, corporis adipisci maiores
          architecto veritatis fuga quas animi pariatur. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quia molestiae consectetur ducimus
          repellendus, ipsa dolor, perspiciatis sapiente illum officia voluptas
          odit, corporis adipisci maiores architecto veritatis fuga quas animi
          pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quia molestiae consectetur ducimus repellendus, ipsa dolor,
          perspiciatis sapiente illum officia voluptas odit, corporis adipisci
          maiores architecto veritatis fuga quas animi pariatur.
        </h3>
        <Grid container marginLeft={6} marginRight={6}>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Experience
            </h4>
            <h3>Minimum 1 year</h3>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Senority Level
            </h4>
            <h3>Senior Level</h3>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Job Type</h4>
            <h3>Full Time</h3>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Salary</h4>
            <h3>$5000/month</h3>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions style={{ padding: '1.5rem 3rem' }}>
        <Grid container alignItems='center' gap={6}>
          <Grid item>
            <Button
              onClick={() => setOpen(false)}
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
          <UserActionConfirmation
            title={'Are You Sure'}
            message={'Do you want to delete this job ?'}
            open={OpenUserConfirmation}
            setOpen={setOpenUserConfirmation}
          />
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default ViewJob;
