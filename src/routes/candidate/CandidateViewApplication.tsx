import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Grid, Divider, Avatar } from '@mui/material';
import deleteIcon from '../../static/icons/delete.svg';
import addIcon from '../../static/icons/addIcon.svg';
import { styled } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Me from '../../static/icons/viren.jpg';
import CandidateSkills from './CandidateSkills';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { IappliedJobsApplications } from '../../typings/appliedJobsApplications';
import CandidateEducation from './CandidateEducation';
import CandidateWorkExperience from './CandidateWorkExperience';
import InformationVideo from '../../shared-components/informationVideo/InformationVideo';
import { AnyMap } from '@reduxjs/toolkit/node_modules/immer/dist/internal';
import UserActionConfirmation from '../../shared-components/userAction/UserActionConfirmation';

interface IPROPS {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  applicationDetails: IappliedJobsApplications;
  withDrawApplication?: any;
  openConfirmation: boolean;
  setOpenConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = styled('input')({
  display: 'none',
});

// Main component
const CandidateViewApplication = ({
  open,
  setOpen,
  applicationDetails,
  withDrawApplication,
  openConfirmation,
  setOpenConfirmation,
}: IPROPS) => {
  const candidateName = useAppSelector(
    (state) => state.candidate.candidateInfo?.personalInfo?.name
  );

  const [openViewVideo, setOpenViewVideo] = useState(false);

  const {
    _id,
    candidateId,
    jobId,
    candidateProfilePic,
    jobTitle,
    jobCompanyName,
    status,
    personalInfo,
    education,
    workExperience,
    skills,
    email,
    cv,
    coverLetter,
    infoVideo,
    createdAt,
  } = applicationDetails;

  // Render
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
              Application for{' '}
              <span style={{ color: '#686868' }}>{jobTitle}</span>
            </h4>
          </Grid>
          <Grid item style={{ marginLeft: '20rem' }}>
            <h4>
              Application No.
              <span style={{ color: '#686868' }}>
                {' '}
                #{_id?.toString()?.substring(0, 10)}
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
      <Divider />
      <DialogContent style={{ padding: '1.5rem 0rem ', overflowX: 'hidden' }}>
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
            Personal Information
          </span>
        </p>
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
            {candidateProfilePic ? (
              <img
                src={candidateProfilePic}
                alt='Candidate_Image'
                style={{
                  width: '8rem',
                  height: '8rem',
                  borderRadius: '50%',
                  backgroundColor: '#c4c4c4',
                }}
              />
            ) : (
              <Avatar color='primary'>
                {/* {  if(candidatePersonalInfo)return  candidatePersonalInfo.name} */}

                {/* {candidateProfilePic === ''
                  ? candidateInfo && candidateInfo!.personalInfo!.name[0]
                  : ''} */}

                {candidateName !== undefined ? candidateName[0] : ''}
              </Avatar>
            )}

            <p className='input-title' style={{ padding: '1rem 0' }}>
              Photo
            </p>
          </Grid>
          <Grid item xl={5} lg={5}>
            <Grid container>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>First name</p>
                <h3 style={{ marginTop: '1rem' }}>{personalInfo?.name}</h3>
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Last name</p>
                <h3 style={{ marginTop: '1rem' }}>{personalInfo?.surname}</h3>
              </Grid>
              <Grid item xl={12} lg={12} paddingTop={4}>
                <p className='input-title'>Address</p>
                <h3 style={{ marginTop: '1rem' }}>{personalInfo?.address}</h3>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={4} lg={4}>
            <Grid container>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Date of Birth</p>
                <h3 style={{ marginTop: '1rem' }}>
                  {personalInfo?.dateOfBirth}
                </h3>
              </Grid>
              <Grid item xl={6} lg={6}>
                <p className='input-title'>Citizenship</p>
                <h3 style={{ marginTop: '1rem' }}>
                  {personalInfo?.citizenship}
                </h3>
              </Grid>
              <Grid item xl={6} lg={6} paddingTop={4}>
                <p className='input-title'>Mobile number</p>
                <h3 style={{ marginTop: '1rem' }}>
                  {personalInfo?.mobileNumber}
                </h3>
              </Grid>
              <Grid item xl={6} lg={6} paddingTop={4}>
                <p className='input-title'>Email</p>
                <h3 style={{ marginTop: '1rem' }}>{email}</h3>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider style={{ marginBottom: '2rem' }} />
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
            Education
          </span>
        </p>
        {education?.map((educationItem) => (
          <CandidateEducation educationDetails={educationItem} />
        ))}

        <Divider style={{ marginBottom: '2rem' }} />
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
            Work Experience
          </span>
        </p>
        {workExperience?.map((workExperienceItem) => (
          <CandidateWorkExperience workExperience={workExperienceItem} />
        ))}

        <Divider style={{ marginBottom: '2rem' }} />
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
            Skills
          </span>
        </p>
        <Grid
          container
          style={{
            marginBottom: '3.5rem',
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <CandidateSkills skills={skills} />
        </Grid>

        <Divider style={{ marginBottom: '2rem' }} />
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
            Attachments
          </span>
        </p>
        <Grid
          container
          gap={3}
          style={{
            marginLeft: '3rem',
            marginRight: '3rem',
          }}
        >
          <Grid item>
            <label htmlFor='contained-button-file1'>
              <Button
                onClick={() => {
                  window.open(`${coverLetter}`, '_target');
                }}
                component='span'
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',

                  margin: '0 0 2rem auto',
                }}
              >
                View Cover Letter
              </Button>
            </label>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                window.open(`${cv}`, '_target');
              }}
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',

                margin: '0 0 2rem auto',
              }}
            >
              View CV
            </Button>
          </Grid>
          <Grid item>
            <Button
              onClick={() => setOpenViewVideo(true)}
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',

                margin: '0 0 2rem auto',
              }}
            >
              View Information Video
            </Button>
          </Grid>
        </Grid>
        <InformationVideo
          openView={openViewVideo}
          close={setOpenViewVideo}
          videoSrc={infoVideo}
        />
      </DialogContent>

      <DialogActions style={{ padding: '1.5rem 3rem' }}>
        <Grid container alignItems='center' gap={6}>
          <Grid item>
            {' '}
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                cursor: 'default',
                fontWeight: 'bold',
                fontSize: '1.1rem',
              }}
            >
              Current stage - Round {status}
            </Button>
          </Grid>

          <Grid item>
            {' '}
            <Button
              onClick={() => {
                setOpenConfirmation(true);
                setOpen(false);
              }}
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
              Withdraw
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
      <UserActionConfirmation
        title={'Are You Sure ?'}
        message={'Do you want to withdraw your application?'}
        open={openConfirmation}
        setOpen={setOpenConfirmation}
        withDrawApplication={withDrawApplication}
        idOfApplication={_id}
      />
    </Dialog>
  );
};

export default CandidateViewApplication;
