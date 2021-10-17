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
import useMediaQuery from '@mui/material/useMediaQuery';

const MainSection = () => {
  const matches = useMediaQuery('(max-width:1535px)');
  return (
    <Grid
      container
      style={{ margin: matches ? '2rem 5rem' : '2rem 10rem' }}
      gap={matches ? 6 : 7}
    >
      <Grid item xl={2} lg={2}>
        <Filter filterName='Type of Job' filterOptions={jobTypes} />
        <Filter filterName='Seniority Levels' filterOptions={seniorityLevels} />
        <Filter filterName='Salary Ranges' filterOptions={salaryRanges} />
      </Grid>
      <Grid item xl={4} lg={4}>
        <JobCard isActive={false} />
        <JobCard isActive={true} />
        <JobCard isActive={false} />
        <JobCard isActive={false} />
      </Grid>
      <Grid item xl={5} lg={5}>
        <JobDetails />
      </Grid>
    </Grid>
  );
};

export default MainSection;
