import React from 'react';
import { Grid } from '@mui/material';

const Info = () => {
  return (
    <>
      <Grid container alignItems='center' textAlign='justify' margin={6}>
        <h2>Email: virenpatil1@outlook.com</h2>
      </Grid>
      <Grid
        container
        alignItems='center'
        textAlign='justify'
        margin={6}
        marginTop={0}
      >
        <h2>Github: https://github.com/Virusviren</h2>
      </Grid>
      <Grid
        container
        alignItems='center'
        textAlign='justify'
        margin={6}
        marginTop={0}
      >
        <h2>Linkedin: https://www.linkedin.com/in/viren-patil-b52393125/ </h2>
      </Grid>
    </>
  );
};

export default Info;
