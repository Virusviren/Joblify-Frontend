import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import CompanyLogo from '../../../static/icons/companyLogo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IJobs } from '../../../typings/jobs';
interface JobCardProps {
  isActive?: boolean;
  jobItem: IJobs;
  activeJobCardId?: any;
  indexNumber: number;
  setActiveJobCardId: React.Dispatch<React.SetStateAction<any>>;
  setActiveJobDetails: React.Dispatch<React.SetStateAction<any>>;
  filters?: string[];
}

interface Test {
  activeJobCardId: string;
  activeJobCardIndex: number;
}

const JobCard = ({
  isActive,
  jobItem,
  activeJobCardId,
  indexNumber,
  filters,
  setActiveJobDetails,
  setActiveJobCardId,
}: JobCardProps) => {
  useEffect(() => {
    // setActiveJobCardId((prevState: Test) => {
    //   return {
    //     ...prevState,
    //     activeJobCardIndex: indexNumber,
    //     activeJobCardId: jobItem._id.toString(),
    //   };
    // });
    setActiveJobDetails(jobItem._id);
  }, [filters]);

  const matches = useMediaQuery('(max-width:1535px)');
  return (
    <Grid
      container
      style={{ borderRadius: '10px', padding: '2rem', cursor: 'pointer' }}
      className={isActive ? 'job-card-active' : 'job-card'}
      marginBottom={5}
      onClick={() => {
        // setActiveJobCardId((activeJobCardId.activeJobcardIndex = indexNumber));
        setActiveJobDetails(jobItem._id);
        setActiveJobCardId((prevState: Test) => {
          return {
            ...prevState,
            activeJobCardIndex: indexNumber,
            activeJobCardId: jobItem._id.toString(),
          };
        });
      }}
    >
      <Grid
        container
        gap={matches ? 3 : 4}
        alignItems='center'
        marginBottom={6}
      >
        <Grid item>
          <img
            src={CompanyLogo}
            alt='Company logo'
            style={{
              borderRadius: '10px',
              width: isActive ? '1.4rem' : '2rem',
            }}
          ></img>
        </Grid>
        <Grid item>
          <h2>{jobItem.jobTitle}</h2>
          <p style={{ marginTop: '1rem' }}>
            {jobItem.details.companyInfo.address}
          </p>
        </Grid>
      </Grid>
      <Grid container gap={3} alignItems='center'>
        <Grid item>
          <span className='type-tag'>{jobItem.type}</span>
        </Grid>
        <Grid item>
          <span className='level-tag'>{jobItem.seniorityLevel}</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobCard;
