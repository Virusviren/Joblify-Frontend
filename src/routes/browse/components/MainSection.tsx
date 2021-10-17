import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Filter from '../../../shared-components/filter/Filter';
import {
  jobTypes,
  salaryRanges,
  seniorityLevels,
} from '../../../static/data/options';
import JobCard from './JobCard';
import JobDetails from './JobDetails';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BASE_URL } from '../../../utils/endpoints';
import { IJobs } from '../../../typings/jobs';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import CustomPagination from '../../../shared-components/pagination/CustomPagination';

const MainSection = () => {
  const matches = useMediaQuery('(max-width:1535px)');

  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch(`${BASE_URL}all-jobs`).then((res) => res.json())
  );

  const [activeJobCardId, setActiveJobCardId] = useState('');

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
        {/* <JobCard isActive={false} />
        <JobCard isActive={true} />
        <JobCard isActive={false} />
        <JobCard isActive={false} /> */}
        {isLoading ? (
          <h3>Loading</h3>
        ) : (
          data.map((job: IJobs) => {
            return (
              <JobCard
                isActive={job._id.toString() === activeJobCardId ? true : false}
                jobItem={job}
                setActiveJobCardId={setActiveJobCardId}
              />
            );
          })
        )}
      </Grid>
      <Grid item xl={5} lg={5}>
        {/* <JobDetails /> */}
        {data?.map(
          (job: IJobs) =>
            job._id.toString() === activeJobCardId && (
              <JobDetails activeJobItem={job} />
            )
        )}
        <CustomPagination />
      </Grid>
    </Grid>
  );
};

export default MainSection;
