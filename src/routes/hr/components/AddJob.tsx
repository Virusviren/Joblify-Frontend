import React, { useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Divider, Dialog, Select, MenuItem } from '@mui/material';
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

const AddJob = ({ open, setOpen }: IPROPS) => {
  const [OpenUserConfirmation, setOpenUserConfirmation] = useState(false);
  return (
    <Dialog open={open} disableEscapeKeyDown={true} maxWidth='lg'>
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <h4>Add a new job</h4>
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
            marginBottom: '2rem',
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
            Job Title
          </span>
        </p>

        <div
          style={{
            marginBottom: '3rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <input
            className='submit-application-input'
            type='text'
            placeholder='Enter Job Title'
          />
        </div>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
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

        <div
          style={{
            marginBottom: '3rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <textarea
            className='submit-application-input'
            placeholder='Enter Job OverView'
            rows={5}
            cols={100}
          />
        </div>

        <p
          style={{
            fontWeight: 'bold',
            marginBottom: '2rem',
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
        <div
          style={{
            marginBottom: '3rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <textarea
            className='submit-application-input'
            placeholder='Enter Job Requirements'
            rows={5}
            cols={100}
          />
        </div>
        <Grid container marginLeft={6} marginRight={6}>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '0.5rem' }}>
              Experience
            </h4>
            <input
              className='submit-application-input'
              type='text'
              placeholder='Enter Experience'
            />
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Senority Level
            </h4>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              // value={age}
              label='SortBy'
              defaultValue={10}
              style={{ height: '2.2rem' }}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Entry Level</MenuItem>
              <MenuItem value={20}>Mid Level</MenuItem>
              <MenuItem value={20}>Senior Level</MenuItem>
            </Select>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Job Type</h4>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              // value={age}
              label='SortBy'
              defaultValue={10}
              style={{ height: '2.2rem' }}
              // onChange={handleChange}
            >
              <MenuItem value={10}>Full Time</MenuItem>
              <MenuItem value={20}>Part Time</MenuItem>
              <MenuItem value={20}>Internships</MenuItem>
              <MenuItem value={20}>Remote</MenuItem>
            </Select>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Salary</h4>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              // value={age}
              label='SortBy'
              defaultValue={10}
              style={{ height: '2.2rem' }}
              // onChange={handleChange}
            >
              <MenuItem value={10}>$500 - $1000</MenuItem>
              <MenuItem value={20}>$1000 - $2000</MenuItem>
              <MenuItem value={20}>$2000 - $3000</MenuItem>
              <MenuItem value={20}>$3000 +</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions style={{ padding: '1.5rem 3rem' }}>
        <Grid container alignItems='center' gap={6} justifyContent='flex-end'>
          <Grid item>
            <Button
              onClick={() => setOpen(false)}
              variant='contained'
              color='error'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            {' '}
            <Button
              variant='contained'
              color='success'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                fontWeight: 'bold',

                color: 'white',
              }}
              onClick={() => setOpenUserConfirmation(true)}
            >
              Submit
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

export default AddJob;
