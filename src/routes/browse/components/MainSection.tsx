import { Grid } from '@mui/material';
import React from 'react';
import Filter from '../../../shared-components/filter/Filter';
import {
  jobTypes,
  salaryRanges,
  seniorityLevels,
} from '../../../static/data/options';
import JobCard from './JobCard';
import JobDetails from './JobDetails';

const MainSection = () => {
  return (
    <Grid container style={{ margin: '2rem 10rem' }} gap={7}>
      <Grid item lg={2}>
        <Filter filterName='Type of Job' filterOptions={jobTypes} />
        <Filter filterName='Seniority Levels' filterOptions={seniorityLevels} />
        <Filter filterName='Salary Ranges' filterOptions={salaryRanges} />
      </Grid>
      <Grid item lg={4}>
        <JobCard isActive={false} />
        <JobCard isActive={true} />
        <JobCard isActive={false} />
        <JobCard isActive={false} />
      </Grid>
      <Grid item lg={5}>
        <JobDetails />
      </Grid>
    </Grid>
  );
};

export default MainSection;
