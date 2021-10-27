import React, { useState } from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
} from '@mui/material';
import { Icandidateinfo } from '../../../../typings/candidate';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import { BASE_URL } from '../../../../utils/endpoints';
import { useMutation } from 'react-query';
import axios from 'axios';
import InformationVideo from '../../../../shared-components/informationVideo/InformationVideo';

interface IPROPS {
  getUserMutation: any;
  candidateInfo: Icandidateinfo;
}
const Input = styled('input')({
  display: 'none',
});

const Documents = ({ getUserMutation, candidateInfo }: IPROPS) => {
  console.log(candidateInfo);

  const [edit, setEdit] = useState(false);

  const [openViewVideo, setOpenViewVideo] = useState(false);

  const token = localStorage.getItem('token')!;
  // Upload CV to server
  const uploadToServerCv = async (cvToUpload: FormData) => {
    console.log(cvToUpload.get('cv'));

    await axios.patch(`${BASE_URL}candidate/profile/edit/cv`, cvToUpload, {
      headers: { 'x-auth-token': token },
    });
    await window.location.reload();
  };
  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cvToUpload = new FormData();

    cvToUpload.append('cv', e.target.files![0]);
    uploadToServerCv(cvToUpload);
  };

  // Upload CoverLetter to Server
  const uploadToServerCoverLetter = async (coverLetterToUpload: FormData) => {
    console.log(coverLetterToUpload.get('coverLetter'));

    await axios.patch(
      `${BASE_URL}candidate/profile/edit/coverLetter`,
      coverLetterToUpload,
      {
        headers: { 'x-auth-token': token },
      }
    );
    await window.location.reload();
  };
  const handleCoverLetterUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changed');

    let coverLetterToUpload = new FormData();

    coverLetterToUpload.append('coverLetter', e.target.files![0]);
    console.log(coverLetterToUpload);

    uploadToServerCoverLetter(coverLetterToUpload);
  };

  // Upload InfoVideo to server
  const uploadToServerInfoVideo = async (infoVideoToUpload: FormData) => {
    await axios.patch(
      // `${BASE_URL}candidate/profile/edit/video`,
      `http://localhost:5000/api/v1/candidate/profile/edit/video`,
      infoVideoToUpload,
      {
        headers: { 'x-auth-token': token },
      }
    );
    await window.location.reload();
  };
  const handleInfoVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('changed');

    let infoVideoToUpload = new FormData();

    infoVideoToUpload.append('video', e.target.files![0]);

    uploadToServerInfoVideo(infoVideoToUpload);
  };

  return (
    <div
      style={{
        margin: '2rem 3rem',
        backgroundColor: 'white',
        borderRadius: '10px',
        boxShadow: '0px 2px 10px 1px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Grid container alignItems='center' padding={3}>
        <Grid item xl={11} lg={10}>
          <h3>Documents</h3>
        </Grid>
        <Grid item xl={1} lg={2} textAlign='end'>
          {' '}
          {edit ? (
            <Button
              variant='contained'
              color='success'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
              onClick={() => {
                setEdit(false);
              }}
            >
              Save
            </Button>
          ) : (
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
              onClick={() => {
                setEdit(true);
              }}
            >
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      <Grid container padding={3} gap={3}>
        {edit ? (
          <Stack direction='row' alignItems='center' spacing={2}>
            <label htmlFor='contained-button-forCvUpload'>
              <Input
                accept='application/pdf'
                id='contained-button-forCvUpload'
                multiple
                type='file'
                onChange={handleCvUpload}
              />
              <Button
                variant='contained'
                component='span'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                }}
              >
                Upload CV
              </Button>
            </label>
          </Stack>
        ) : (
          <Button
            onClick={() => {
              window.open(`${candidateInfo?.cv}`, '_target');
            }}
            disabled={candidateInfo?.cv === undefined ? true : false}
            variant='contained'
            color='primary'
            style={{
              borderRadius: '10px',
              padding: '0.5rem 3rem',
              textTransform: 'capitalize',
            }}
          >
            View CV
          </Button>
        )}
        {edit ? (
          <Stack direction='row' alignItems='center' spacing={2}>
            <label htmlFor='contained-button-forCoverLetterUpload'>
              <Input
                accept='application/pdf'
                id='contained-button-forCoverLetterUpload'
                multiple
                type='file'
                onChange={handleCoverLetterUpload}
              />
              <Button
                variant='contained'
                component='span'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                }}
              >
                Upload CoverLetter
              </Button>
            </label>
          </Stack>
        ) : (
          <Button
            onClick={() => {
              window.open(`${candidateInfo?.coverLetter}`, '_target');
            }}
            disabled={candidateInfo?.coverLetter === undefined ? true : false}
            variant='contained'
            color='primary'
            style={{
              borderRadius: '10px',
              padding: '0.5rem 3rem',
              textTransform: 'capitalize',
            }}
          >
            View CoverLetter
          </Button>
        )}

        {edit ? (
          <Stack direction='row' alignItems='center' spacing={2}>
            <label htmlFor='contained-button-forInfoVideoUpload'>
              <Input
                accept='video/*'
                id='contained-button-forInfoVideoUpload'
                multiple
                type='file'
                onChange={handleInfoVideoUpload}
              />
              <Button
                variant='contained'
                component='span'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                }}
              >
                Upload InfoVideo
              </Button>
            </label>
          </Stack>
        ) : (
          <Button
            onClick={() => {
              setOpenViewVideo(true);
            }}
            disabled={candidateInfo?.infoVideo === undefined ? true : false}
            variant='contained'
            color='primary'
            style={{
              borderRadius: '10px',
              padding: '0.5rem 3rem',
              textTransform: 'capitalize',
            }}
          >
            View InfoVideo
          </Button>
        )}
      </Grid>
      <InformationVideo
        openView={openViewVideo}
        close={setOpenViewVideo}
        videoSrc={candidateInfo?.infoVideo}
      />
    </div>
  );
};

export default Documents;
