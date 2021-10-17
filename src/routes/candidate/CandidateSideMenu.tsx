import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const CandidateSideMenu = () => {
  let location = useLocation();
  return (
    <>
      <Grid
        container
        alignItems='center'
        gap={3}
        style={{ paddingLeft: '0.5rem', marginBottom: '1rem' }}
      >
        <Grid
          item
          className={
            location.pathname === '/candidate-applied-job'
              ? 'active-menu-item'
              : 'inactive-menu-item'
          }
        >
          <PeopleIcon
            style={{ fontSize: '2rem', paddingLeft: '1rem' }}
            className={
              location.pathname === '/candidate-applied-job'
                ? 'side-menu-active-icon'
                : 'side-menu-icon'
            }
          />
        </Grid>
        <Grid item>
          {' '}
          <Link
            to='/candidate-applied-job'
            className={
              location.pathname === '/candidate-applied-job'
                ? 'side-menu-active-link'
                : 'side-menu-link'
            }
          >
            Applied Jobs
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems='center'
        gap={3}
        style={{ paddingLeft: '0.5rem', marginBottom: '1rem' }}
      >
        <Grid
          item
          className={
            location.pathname === '/candidate-personalInfo'
              ? 'active-menu-item'
              : 'inactive-menu-item'
          }
        >
          <PersonIcon
            style={{ fontSize: '2rem', paddingLeft: '1rem' }}
            className={
              location.pathname === '/candidate-personalInfo'
                ? 'side-menu-active-icon'
                : 'side-menu-icon'
            }
          />
        </Grid>
        <Grid item>
          {' '}
          <Link
            to='/candidate-personalInfo'
            className={
              location.pathname === '/candidate-personalInfo'
                ? 'side-menu-active-link'
                : 'side-menu-link'
            }
          >
            {' '}
            Personal Info
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems='center'
        gap={3}
        style={{ paddingLeft: '0.5rem', marginBottom: '1rem' }}
      >
        <Grid
          item
          className={
            location.pathname === '/browse'
              ? 'active-menu-item'
              : 'inactive-menu-item'
          }
        >
          <WorkIcon
            style={{ fontSize: '2rem', paddingLeft: '1rem' }}
            className={
              location.pathname === '/browse'
                ? 'side-menu-active-icon'
                : 'side-menu-icon'
            }
          />
        </Grid>
        <Grid item>
          {' '}
          <Link
            to='/browse'
            className={
              location.pathname === '/browse'
                ? 'side-menu-active-link'
                : 'side-menu-link'
            }
          >
            Browse Jobs
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default CandidateSideMenu;
