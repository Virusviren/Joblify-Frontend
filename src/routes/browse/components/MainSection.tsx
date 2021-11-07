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
import { useQuery } from 'react-query';

import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { loginUser } from '../../../features/Authentication/authSlice';
// Interfaces

interface Test {
  activeJobCardId: string;
  activeJobCardIndex: number;
}

const MainSection = () => {
  const matches = useMediaQuery('(max-width:1535px)');
  const dispatch = useAppDispatch();
  const [data, setData] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(true);

  // Fetching Jobs
  //const { isLoading, error, data, isFetching } = useQuery('repoData', () =>
  //fetch(`${BASE_URL}all-jobs`).then((res) => res.json())
  //);

  console.log('here!');

  const fetchJobs = async () => {
    try {
      const resp = await fetch(`${BASE_URL}all-jobs`);
      if (resp.ok) {
        const data = await resp.json();
        setData(data);
        setIsFetching(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // States

  const [activeJobCardId, setActiveJobCardId] = useState({
    activeJobCardId: '',
    activeJobCardIndex: 0,
  });
  const [filters, setFilters] = useState(['']);

  const [activeJobDetails, setActiveJobDetails] = useState('');

  // UseEffects
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
  }, [filters]);
  useEffect(() => {
    if (!isFetching) {
      // dispatch(allJobs(data));
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
    // console.log(filters);

    if (!isFetching) {
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

  useEffect(() => {
    fetchJobs();
  }, []);

  if (!isFetching) {
    return (
      <Grid
        container
        style={{
          margin: matches ? '2rem 5rem' : '2rem 10rem',
        }}
        gap={matches ? 6 : 7}
      >
        <Grid item xl={2} lg={2}>
          {/* <Filter
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
          /> */}
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          style={{
            overflow: 'auto',
            height: '100vh',
          }}
        >
          {/* <JobCard isActive={false} />
        <JobCard isActive={true} />
        <JobCard isActive={false} />
        <JobCard isActive={false} /> */}
          {filters.length > 1
            ? data
                .filter((list: any) => list.type === filters[1])
                .map((job: IJobs, index: number) => {
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
                      filters={filters}
                      setActiveJobDetails={setActiveJobDetails}
                    />
                  );
                })
            : data.map((job: IJobs, index: number) => {
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
                    setActiveJobDetails={setActiveJobDetails}
                  />
                );
              })}
        </Grid>
        <Grid item xl={5} lg={5}>
          {data
            .filter(
              (job: IJobs) => job._id.toString() === activeJobDetails.toString()
            )
            .map((job: IJobs) => {
              return <JobDetails activeJobItem={job} filters={filters} />;
            })}

          {/* <CustomPagination /> */}
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid
        container
        textAlign='center'
        alignItems='center'
        style={{ height: '73.5vh' }}
      >
        <CircularProgress size={60} sx={{ margin: '2rem auto' }} />
      </Grid>
    );
  }
};

export default MainSection;
