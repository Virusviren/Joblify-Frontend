import React from 'react';
import {
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  Divider,
} from '@mui/material';

const Documents = () => {
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
          <Button
            variant='contained'
            color='primary'
            style={{
              borderRadius: '10px',
              padding: '0.5rem 3rem',
              textTransform: 'capitalize',
            }}
          >
            Edit
          </Button>{' '}
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: '#E0E0E0', height: '4px', width: '100%' }}
      ></div>
      <Grid container padding={3} gap={3}>
        <h3>CV.pdf</h3>
        <h3>CoverLetter.pdf</h3>
        <h3>Info video</h3>
      </Grid>
    </div>
  );
};

export default Documents;
