import React, { ChangeEvent, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Grid,
  Divider,
  Dialog,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import deleteIcon from '../../../static/icons/delete.svg';
import addIcon from '../../../static/icons/addIcon.svg';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Me from '../../../static/icons/viren.jpg';
import Skills from './Skills';
import Button from '@mui/material/Button';
import CompanyLogo from '../../../static/icons/companyLogo.jpeg';
import UserActionAddJobHr from '../../../shared-components/userActionAddJobHr/UserActionAddJobHr';
import { PostJob } from '../../../typings/jobs';

interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
  addJob: (data: PostJob) => Promise<void>;
}

const AddJob = ({ open, setOpen, addJob }: IPROPS) => {
  const [OpenUserConfirmation, setOpenUserConfirmation] = useState(false);

  const [jobData, setJobData] = useState({
    title: '',
    overview: '',
    requirements: '',
    experience: '',
    seniorityLevel: 'Entry Level',
    type: 'Full Time',
    salary: '$500 - $1000',
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog
      open={open}
      disableEscapeKeyDown={true}
      maxWidth='lg'
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
                <h3 style={{ marginTop: '1rem' }}>Strive School</h3>
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Address</p>
                <h3 style={{ marginTop: '1rem' }}>Berlin, Germany</h3>
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
            name='title'
            value={jobData.title}
            onChange={handleChange}
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
            name='overview'
            value={jobData.overview}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setJobData({
                ...jobData,
                [e.target.name]: e.target.value,
              });
            }}
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
            name='requirements'
            value={jobData.requirements}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setJobData({
                ...jobData,
                [e.target.name]: e.target.value,
              });
            }}
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
              name='experience'
              value={jobData.experience}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Senority Level
            </h4>
            <Select
              sx={{ width: '15rem' }}
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              name='seniorityLevel'
              value={jobData.seniorityLevel}
              defaultValue={'Entry Level'}
              style={{ height: '2.2rem' }}
              onChange={(e: SelectChangeEvent<string>) => {
                setJobData({
                  ...jobData,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <MenuItem value={'Entry Level'} style={{ width: '15rem' }}>
                Entry Level
              </MenuItem>
              <MenuItem value={'Mid Level'}>Mid Level</MenuItem>
              <MenuItem value={'Senior Level'}>Senior Level</MenuItem>
            </Select>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Job Type</h4>
            <Select
              labelId='demo-simple-select-label'
              sx={{ width: '12rem' }}
              id='demo-simple-select'
              name='type'
              value={jobData.type}
              defaultValue={'Full Time'}
              style={{ height: '2.2rem' }}
              onChange={(e: SelectChangeEvent<string>) => {
                setJobData({
                  ...jobData,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <MenuItem value={'Full Time'} style={{ width: '12rem' }}>
                Full Time
              </MenuItem>
              <MenuItem value={'Part Time'}>Part Time</MenuItem>
              <MenuItem value={'Internships'}>Internships</MenuItem>
              <MenuItem value={'Remote'}>Remote</MenuItem>
            </Select>
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Salary</h4>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              sx={{ width: '12rem' }}
              value={jobData.salary}
              name='salary'
              defaultValue={'$500 - $1000'}
              style={{ height: '2.2rem' }}
              onChange={(e: SelectChangeEvent<string>) => {
                setJobData({
                  ...jobData,
                  [e.target.name]: e.target.value,
                });
              }}
            >
              <MenuItem value={'$500 - $1000'} style={{ width: '12rem' }}>
                $500 - $1000
              </MenuItem>
              <MenuItem value={'$1000 - $2000'}>$1000 - $2000</MenuItem>
              <MenuItem value={'$2000 - $3000'}>$2000 - $3000</MenuItem>
              <MenuItem value={'$3000 +'}>$3000 +</MenuItem>
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
              onClick={() => {
                setOpenUserConfirmation(true);
              }}
            >
              Submit
            </Button>
          </Grid>
          <UserActionAddJobHr
            title={'Are You Sure'}
            message={'Do you want to add this job ?'}
            open={OpenUserConfirmation}
            setOpen={setOpenUserConfirmation}
            addJob={addJob}
            jobData={jobData}
            closeAdd={setOpen}
          />
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default AddJob;
