import { CircularProgress, Grid } from '@mui/material';
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

interface Test {
  activeJobCardId: string;
  activeJobCardIndex: number;
}
const MainSection = () => {
  const matches = useMediaQuery('(max-width:1535px)');

  const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
    fetch(`${BASE_URL}all-jobs`).then((res) => res.json())
  );

  const [activeJobCardId, setActiveJobCardId] = useState({
    activeJobCardId: '',
    activeJobCardIndex: 0,
  });
  const [filters, setFilters] = useState(['']);

  useEffect(() => {
    if (!isFetching) {
      setActiveJobCardId((prevState: Test) => {
        return {
          ...prevState,
          activeJobCardIndex: 0,
          activeJobCardId: data[0]._id.toString(),
        };
      });
    }
  }, [data]);

  useEffect(() => {
    console.log(filters);

    if (!isFetching) {
      console.log(filters);

      const resultsType = filters?.map((item) => {
        return data.filter((job: IJobs) => job.type === item);
      });
      const resultsLevel = filters.map((item) => {
        return data.filter((job: IJobs) => job.seniorityLevel === item);
      });

      const resultsSalary = filters.map((item) => {
        return data.filter((job: IJobs) => job.salary === item);
      });
    }
  }, [filters]);

  if (!isFetching) {
    return (
      <Grid
        container
        style={{ margin: matches ? '2rem 5rem' : '2rem 10rem' }}
        gap={matches ? 6 : 7}
      >
        <Grid item xl={2} lg={2}>
          <Filter
            setFilters={setFilters}
            filterName='Type of Job'
            filterOptions={jobTypes}
            data={data}
            filters={filters}
          />
          <Filter
            setFilters={setFilters}
            filterName='Seniority Levels'
            filterOptions={seniorityLevels}
            data={data}
            filters={filters}
          />
          <Filter
            setFilters={setFilters}
            filterName='Salary Ranges'
            filterOptions={salaryRanges}
            data={data}
            filters={filters}
          />
        </Grid>
        <Grid item xl={4} lg={4}>
          {/* <JobCard isActive={false} />
        <JobCard isActive={true} />
        <JobCard isActive={false} />
        <JobCard isActive={false} /> */}
          {filters.length > 1
            ? data
                .filter((list: any) => list.type === filters[1])
                .map((job: IJobs, index: number) => {
                  console.log(index === activeJobCardId.activeJobCardIndex);
                  return (
                    <JobCard
                      isActive={
                        index === activeJobCardId.activeJobCardIndex
                          ? true
                          : false
                      }
                      jobItem={job}
                      indexNumber={index}
                      activeJobCardId={activeJobCardId}
                      setActiveJobCardId={setActiveJobCardId}
                    />
                  );
                })
            : data.map((job: IJobs, index: number) => {
                console.log(activeJobCardId?.activeJobCardIndex);

                return (
                  <JobCard
                    isActive={
                      index === activeJobCardId.activeJobCardIndex
                        ? true
                        : false
                    }
                    jobItem={job}
                    indexNumber={index}
                    activeJobCardId={activeJobCardId}
                    setActiveJobCardId={setActiveJobCardId}
                  />
                );
              })}
        </Grid>
        <Grid item xl={5} lg={5}>
          {data
            .filter(
              (job: IJobs) =>
                job._id.toString() === activeJobCardId.activeJobCardId
            )
            .map((job: IJobs) => {
              console.log(job);

              return <JobDetails activeJobItem={job} />;
            })}

          <CustomPagination />
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid container textAlign='center'>
        <CircularProgress size={60} sx={{ margin: '2rem auto' }} />
      </Grid>
    );
  }
};

export default MainSection;
