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
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
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

      <DialogContent style={{ padding: '1.5rem 3rem' }}>
        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontSize: 'large',
          }}
        >
          Personal Information
        </p>
        <Grid container style={{ marginBottom: '3.5rem' }} gap={5}>
          <Grid item textAlign='center' xl={'auto'} lg={'auto'}>
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
            <p className='input-title' style={{ padding: '1rem 0' }}>
              Photo
            </p>
          </Grid>
          <Grid item xl={5} lg={5}>
            <Grid container>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>First name</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Last name</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={12} lg={12} paddingTop={4}>
                <p className='input-title'>Address</p>
                <input
                  className='submit-application-input'
                  type='text'
                  style={{ width: '95%' }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={5} lg={4}>
            <Grid container>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Date of Birth</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Citizenship</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={6} lg={6} paddingTop={4}>
                <p className='input-title'>Mobile number</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={6} lg={6} paddingTop={4}>
                <p className='input-title'>Email</p>
                <input className='submit-application-input' type='text' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontSize: 'large',
          }}
        >
          Education
        </p>
        <Grid
          container
          style={{ marginBottom: '3.5rem' }}
          alignItems={'center'}
          justifyContent='space-between'
        >
          <Grid item xl={10} lg={10}>
            <Grid container>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>Level of education</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>School/University Name</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>From</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>To</p>
                <input className='submit-application-input' type='text' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={2} lg={2}>
            <img src={addIcon} alt='Add icon' />
          </Grid>
        </Grid>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontSize: 'large',
          }}
        >
          Work Experience
        </p>
        <Grid
          container
          style={{ marginBottom: '3.5rem' }}
          alignItems='center'
          justifyContent='space-between'
        >
          <Grid item xl={10} lg={10}>
            <Grid container>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>Company Name</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>Position</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>From</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={3} lg={3}>
                <p className='input-title'>To</p>
                <input className='submit-application-input' type='text' />
              </Grid>
              <Grid item xl={12} lg={12} paddingTop={4}>
                <p className='input-title'>Description</p>
                <input className='submit-application-input' type='text' />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xl={2} lg={2}>
            <img src={addIcon} alt='Add icon' />
          </Grid>
        </Grid>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontSize: 'large',
          }}
        >
          Skills
        </p>
        <Grid container style={{ marginBottom: '3.5rem' }}>
          <p className='input-title' style={{ marginBottom: '1rem' }}>
            Add Skills
          </p>
          <input
            className='submit-application-input'
            type='text'
            style={{ width: '100%' }}
          />
        </Grid>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
            fontSize: 'large',
          }}
        >
          Attachments
        </p>
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

      <DialogActions style={{ padding: '1.5rem 3rem' }}>
        <Grid container alignItems='center' justifyContent='space-around'>
          <Grid item lg={'auto'}>
            <Checkbox {...label} color='primary' />
          </Grid>
          <Grid item lg={6}>
            {' '}
            <p style={{ marginRight: '1.5rem' }}>
              You agree to process your data
            </p>
          </Grid>
          <Grid item lg={2}>
            <Button
              onClick={() => setOpen(false)}
              variant='contained'
              color='secondary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item lg={2}>
            {' '}
            <Button
              onClick={() => setOpen(false)}
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default ApplicationForm;
