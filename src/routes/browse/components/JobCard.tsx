import { Grid } from '@mui/material';
import React from 'react';
import CompanyLogo from '../../../static/icons/companyLogo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
import { IJobs } from '../../../typings/jobs';
interface JobCardProps {
  isActive: boolean;
  jobItem: IJobs;

  setActiveJobCardId: React.Dispatch<React.SetStateAction<string>>;
}

const JobCard = ({
  isActive,
  jobItem,

  setActiveJobCardId,
}: JobCardProps) => {
  const matches = useMediaQuery('(max-width:1535px)');
  return (
    <Grid
      container
      style={{ borderRadius: '10px', padding: '2rem', cursor: 'pointer' }}
      className={isActive ? 'job-card-active' : 'job-card'}
      marginBottom={5}
      onClick={() => {
        setActiveJobCardId(jobItem._id.toString());
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
          <h2>{jobItem.jobId}</h2>
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
