import { Grid } from '@mui/material';
import React from 'react';
import Navbar from '../../shared-components/navbar/Navbar';
import AccordionFaq from './components/AccordionFaq';

const Faq = () => {
  return (
    <Grid container>
      <Navbar />
      <Grid container justifyContent='center' marginTop={3}>
        <AccordionFaq />
      </Grid>
    </Grid>
  );
};

export default Faq;
