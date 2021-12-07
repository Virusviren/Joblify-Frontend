import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../../shared-components/navbar/Navbar';
import Description from './components/Description';
import Technologies from './components/Technologies';

const About = () => {
  return (
    <Grid container>
      <Navbar />
      <Description />
      <Technologies />
    </Grid>
  );
};

export default About;
