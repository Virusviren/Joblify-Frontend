import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';
import { Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const SideMenu = () => {
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
            location.pathname === '/hr-applications'
              ? 'active-menu-item'
              : 'inactive-menu-item'
          }
        >
          <PeopleIcon
            style={{ fontSize: '2rem', paddingLeft: '1rem' }}
            className={
              location.pathname === '/hr-applications'
                ? 'side-menu-active-icon'
                : 'side-menu-icon'
            }
          />
        </Grid>
        <Grid item>
          {' '}
          <Link
            to='/hr-applications'
            className={
              location.pathname === '/hr-applications'
                ? 'side-menu-active-link'
                : 'side-menu-link'
            }
          >
            Applications
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
            location.pathname === '/hr-job-list'
              ? 'active-menu-item'
              : 'inactive-menu-item'
          }
        >
          <WorkIcon
            style={{ fontSize: '2rem', paddingLeft: '1rem' }}
            className={
              location.pathname === '/hr-job-list'
                ? 'side-menu-active-icon'
                : 'side-menu-icon'
            }
          />
        </Grid>
        <Grid item>
          {' '}
          <Link
            to='/hr-job-list'
            className={
              location.pathname === '/hr-job-list'
                ? 'side-menu-active-link'
                : 'side-menu-link'
            }
          >
            {' '}
            Job List
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
            location.pathname === '/hr-personal-info'
              ? 'active-menu-item'
              : 'inactive-menu-item'
          }
        >
          <PersonIcon
            style={{ fontSize: '2rem', paddingLeft: '1rem' }}
            className={
              location.pathname === '/hr-personal-info'
                ? 'side-menu-active-icon'
                : 'side-menu-icon'
            }
          />
        </Grid>
        <Grid item>
          {' '}
          <Link
            to='/hr-personal-info'
            className={
              location.pathname === '/hr-personal-info'
                ? 'side-menu-active-link'
                : 'side-menu-link'
            }
          >
            Personal Info
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default SideMenu;
