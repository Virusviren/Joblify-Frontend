import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import Logo from '../../static/icons/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <Grid
        container
        gap={2}
        justifyContent='center'
        alignItems='center'
        marginTop={3}
        marginBottom={3}
      >
        <Grid item lg={'auto'}>
          <Grid container justifyItems='center'>
            {/* LOGO */}
            <Grid item>
              <img src={Logo} alt='Logo' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={6}>
          <Grid container justifyContent='center' gap={3}>
            {/* For the links */}
            <Grid
              item
              className={location.pathname === '/' ? 'nav-link-active' : ''}
            >
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </Grid>
            <Grid
              item
              className={
                location.pathname === '/about' ? 'nav-link-active' : ''
              }
            >
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </Grid>
            <Grid
              item
              className={location.pathname === '/faq' ? 'nav-link-active' : ''}
            >
              <Link to='/faq' className='nav-link'>
                FAQ
              </Link>
            </Grid>
            <Grid
              item
              className={
                location.pathname === '/contact' ? 'nav-link-active' : ''
              }
            >
              <Link to='/contact' className='nav-link'>
                Contact
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={'auto'}>
          <Grid container alignItems='center' justifyItems='center' gap={3}>
            <Grid
              item
              className={
                location.pathname === '/browse' ? 'nav-link-active' : ''
              }
            >
              <Link to='/browse' className='nav-link'>
                Browse Jobs
              </Link>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='primary'
                style={{
                  borderRadius: '10px',
                  padding: '0.5rem 3rem',
                  textTransform: 'capitalize',
                }}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr
        style={{
          height: '2.5px',
          width: '100%',
          background: '#DCE3F0',
          border: 'none',
          opacity: '0.7',
        }}
      />
    </>
  );
};

export default Navbar;
