import { Grid } from '@mui/material';
import React from 'react';
import CompanyLogo from '../../../static/icons/companyLogo.svg';
import useMediaQuery from '@mui/material/useMediaQuery';
interface JobCardProps {
  isActive: boolean;
}

const JobCard = ({ isActive }: JobCardProps) => {
  const matches = useMediaQuery('(max-width:1535px)');
  return (
    <Grid
      container
      style={{ borderRadius: '10px', padding: '2rem' }}
      className={isActive ? 'job-card-active' : 'job-card'}
      marginBottom={5}
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
          <h2>Senior Frontend Developer ASAP</h2>
          <p style={{ marginTop: '1rem' }}>2972, Westminster Rd., Berlin</p>
        </Grid>
      </Grid>
      <Grid container gap={3} alignItems='center'>
        <Grid item>
          <span className='type-tag'>Full-time</span>
        </Grid>
        <Grid item>
          <span className='level-tag'>Entry Level</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobCard;
