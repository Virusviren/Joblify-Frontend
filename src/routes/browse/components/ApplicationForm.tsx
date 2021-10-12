import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid } from '@mui/material';
import deleteIcon from '../../../static/icons/delete.svg';
import addIcon from '../../../static/icons/addIcon.svg';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import { borderBottom } from '@mui/system';

interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Input = styled('input')({
  display: 'none',
});

const ApplicationForm = ({ open, setOpen }: IPROPS) => {
  return (
    <Dialog open={open} disableEscapeKeyDown={true} maxWidth='xl'>
      <DialogTitle>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <h4>
              Your Application for{' '}
              <span style={{ color: '#686868' }}>
                Senior Frontend Developer
              </span>
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

      <DialogContent>
        <p>Personal Information</p>
        <Grid container>
          <Grid item textAlign='center'>
            <div
              style={{
                width: '8rem',
                height: '8rem',
                borderRadius: '50%',
                backgroundColor: '#c4c4c4',
              }}
            >
              <label
                htmlFor='contained-button-file'
                style={{ position: 'relative', top: '38%' }}
              >
                <Input
                  accept='image/*'
                  id='contained-button-file'
                  type='file'
                  hidden
                />
                <Button variant='contained' component='span'>
                  Upload
                </Button>
              </label>
            </div>
            <p>Photo</p>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item lg={6}>
                <p>First name</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item lg={6}>
                <p>Last name</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item lg={12}>
                <p>Address</p>
                <input className='submit-application-input' type='text' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item lg={6}>
                <p>Date of Birth</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item lg={6}>
                <p>Citizenship</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item lg={6}>
                <p>Mobile number</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item lg={6}>
                <p>Email</p>
                <input className='submit-application-input' type='text' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <p>Education</p>
        <Grid container>
          <Grid item lg={2}>
            <p>Level of education</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <p>School/University Name</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <p>From</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <p>To</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <img src={addIcon} alt='Add icon' />
          </Grid>
        </Grid>
        <p>Work Experience</p>
        <Grid container>
          <Grid item lg={2}>
            <p>Company Name</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <p>Position</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <p>From</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <p>To</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <p>Description</p>
            <input className='submit-application-input' type='text' />
          </Grid>
          <Grid item lg={2}>
            <img src={addIcon} alt='Add icon' />
          </Grid>
        </Grid>
        <p>Skills</p>
        <Grid container>
          <p>Add Skills</p>
          <input className='submit-application-input' type='text' />
        </Grid>
        <p>Attachments</p>
        <Grid container gap={3}>
          <Grid item>
            <label htmlFor='contained-button-file1'>
              <Input
                id='contained-button-file1'
                multiple
                type='file'
                accept='application/pdf'
              />
              <Button
                component='span'
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',

                  margin: '2rem 0 2rem auto',
                }}
              >
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',

                margin: '2rem 0 2rem auto',
              }}
            >
              Upload CV
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',

                margin: '2rem 0 2rem auto',
              }}
            >
              Upload Information Video
            </Button>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Checkbox {...label} color='primary' />
        <p>
          In order to access certain content and to make use of additional
          functionality and features of Wiley’s websites and services, we may
          ask.
        </p>
        <Button
          onClick={() => setOpen(false)}
          variant='contained'
          color='secondary'
          style={{
            borderRadius: '10px',
            padding: '0.5rem 3rem',
            textTransform: 'capitalize',

            margin: '2rem 0 2rem auto',
          }}
        >
          Cancel
        </Button>

        <Button
          onClick={() => setOpen(false)}
          variant='contained'
          color='primary'
          style={{
            borderRadius: '10px',
            padding: '0.5rem 3rem',
            textTransform: 'capitalize',

            margin: '2rem 0 2rem auto',
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationForm;
