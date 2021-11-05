import React, { ChangeEvent, useState } from 'react';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {
  Grid,
  Divider,
  Dialog,
  MenuItem,
  Select,
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
import { IJobs, PostJob } from '../../../typings/jobs';
import UserActionDeleteJobHr from '../../../shared-components/userActionDeleteJobHr/UserActionDeleteJobHr';

interface IPROPS {
  open: boolean;
  setOpen(open: boolean): any;
  job: IJobs;
  deleteJob: (id: string) => Promise<void>;
  editJob: (id: string, data: PostJob) => Promise<void>;
  getAllJobListMutation: any;
}

const ViewJob = ({
  open,
  setOpen,
  job,
  deleteJob,
  editJob,
  getAllJobListMutation,
}: IPROPS) => {
  const [OpenUserConfirmation, setOpenUserConfirmation] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    title: job?.jobTitle,
    overview: job?.overview,
    requirements: job?.requirements,
    experience: job?.experience,
    seniorityLevel: job?.seniorityLevel,
    salary: job?.salary,
    type: job?.type,
  });
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const token = localStorage.getItem('token')!;
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
                getAllJobListMutation.mutate(token);
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
            {!edit ? (
              <Button
                onClick={() => setEdit(true)}
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
            ) : (
              <Button
                onClick={() => setEdit(false)}
                variant='contained'
                color='error'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                }}
              >
                Cancel
              </Button>
            )}
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

        {!edit ? (
          <h3
            style={{
              marginBottom: '3rem',
              marginLeft: '3rem',
              marginRight: '3rem',
            }}
          >
            {data?.overview}
          </h3>
        ) : (
          <textarea
            style={{
              marginBottom: '3rem',
              marginLeft: '3rem',
              marginRight: '3rem',
            }}
            value={data?.overview}
            className='submit-application-input'
            placeholder='Enter Job OverView'
            rows={5}
            cols={100}
            name='overview'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setData({
                ...data,
                [e.target.name]: e.target.value,
              });
            }}
          />
        )}
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
        {!edit ? (
          <h3
            style={{
              marginBottom: '3rem',
              marginLeft: '3rem',
              marginRight: '3rem',
            }}
          >
            {data?.requirements}
          </h3>
        ) : (
          <textarea
            style={{
              marginBottom: '3rem',
              marginLeft: '3rem',
              marginRight: '3rem',
            }}
            value={data?.requirements}
            className='submit-application-input'
            placeholder='Enter Job OverView'
            rows={5}
            cols={100}
            name='requirements'
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
              setData({
                ...data,
                [e.target.name]: e.target.value,
              });
            }}
          />
        )}
        <Grid container marginLeft={6} marginRight={6} marginBottom={3}>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Experience
            </h4>
            {!edit ? (
              <h3>{data?.experience}</h3>
            ) : (
              <input
                className='submit-application-input'
                type='text'
                placeholder='Enter Experience'
                name='experience'
                value={data?.experience}
                onChange={handleChange}
              />
            )}
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>
              Senority Level
            </h4>
            {!edit ? (
              <h3>{data?.seniorityLevel}</h3>
            ) : (
              <Select
                sx={{ width: '15rem' }}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='seniorityLevel'
                value={data?.seniorityLevel}
                defaultValue={data?.seniorityLevel}
                style={{ height: '2.2rem' }}
                onChange={(e: SelectChangeEvent<string>) => {
                  setData({
                    ...data,
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
            )}
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Job Type</h4>
            {!edit ? (
              <h3>{data?.type}</h3>
            ) : (
              <Select
                labelId='demo-simple-select-label'
                sx={{ width: '12rem' }}
                id='demo-simple-select'
                name='type'
                value={data.type}
                defaultValue={data?.type}
                style={{ height: '2.2rem' }}
                onChange={(e: SelectChangeEvent<string>) => {
                  setData({
                    ...data,
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
            )}
          </Grid>
          <Grid item xl={3} lg={3}>
            <h4 style={{ color: '#686868', marginBottom: '1rem' }}>Salary</h4>
            {!edit ? (
              <h3>{data?.salary}/month</h3>
            ) : (
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                sx={{ width: '12rem' }}
                value={data.salary}
                name='salary'
                defaultValue={data?.salary}
                style={{ height: '2.2rem' }}
                onChange={(e: SelectChangeEvent<string>) => {
                  setData({
                    ...data,
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
            )}
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
            {!edit ? (
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
            ) : (
              <Button
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                }}
                onClick={() => {
                  editJob(job?._id, data);
                  setEdit(false);
                }}
              >
                Save
              </Button>
            )}
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
