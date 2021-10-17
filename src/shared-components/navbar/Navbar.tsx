import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import Logo from '../../static/icons/Logo.svg';
import { Link, useLocation } from 'react-router-dom';
import LoginModal from './LoginModal';
import './Navbar.css';
import RegistrationModal from './RegistrationModal';

const Navbar = () => {
  let location = useLocation();
  console.log(location.pathname);
  const [LoginModalOpen, setLoginModalOpen] = useState(false);
  const [RegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [toggleModal, setToggleModal] = useState('Login');
  console.log(toggleModal);

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
        <Grid item xl={'auto'} lg={'auto'}>
          <Grid container justifyItems='center'>
            {/* LOGO */}
            <Grid item>
              <img src={Logo} alt='Logo' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={6} lg={6}>
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
        <Grid item xl={'auto'} lg={'auto'}>
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
                onClick={() => setLoginModalOpen(true)}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <LoginModal
        LoginModalOpen={LoginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
        toggleLoginAndRegistrationModal={setToggleModal}
        setRegisterModalOpen={setRegisterModalOpen}
      />
      {toggleModal === 'register' && (
        <RegistrationModal
          setLoginModalOpen={setLoginModalOpen}
          RegisterModalOpen={RegisterModalOpen}
          setRegisterModalOpen={setRegisterModalOpen}
          toggleLoginAndRegistrationModal={setToggleModal}
        />
      )}
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
