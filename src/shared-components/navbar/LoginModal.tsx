import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import deleteIcon from '../../static/icons/delete.svg';

interface IPROPS {
  LoginModalOpen: boolean;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  setRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
  toggleLoginAndRegistrationModal: Dispatch<SetStateAction<string>>;
}

const LoginModal = ({
  LoginModalOpen,
  setLoginModalOpen,
  toggleLoginAndRegistrationModal,
  setRegisterModalOpen,
}: IPROPS) => {
  console.log('open');

  return (
    <Dialog open={LoginModalOpen} disableEscapeKeyDown={true} maxWidth='xl'>
      <Grid container justifyContent='flex-end' paddingRight={2} paddingTop={2}>
        <img
          src={deleteIcon}
          alt='close img'
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            setLoginModalOpen(false);
          }}
        />
      </Grid>
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item lg={12} xl={12} textAlign='center'>
            <h3>Welcome back!</h3>
            <p style={{ fontSize: '14px' }}>
              Please enter your credentials to login
            </p>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container justifyContent='center'>
          <Grid item lg={12} xl={12}>
            <p
              style={{
                fontWeight: 'bold',
                paddingTop: '1rem',
                marginBottom: '10px',
              }}
            >
              Email
            </p>
            <input className='login-input' type='text' />
          </Grid>
          <Grid item lg={12} xl={12}>
            <p
              style={{
                fontWeight: 'bold',
                paddingTop: '1rem',
                marginBottom: '10px',
              }}
            >
              Password
            </p>
            <input className='login-input' type='text' />
          </Grid>
          <Grid item xl={6} lg={6} marginTop={1}>
            <p>
              Don’t have an account?{' '}
              <span
                style={{
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#4640de',
                }}
                onClick={() => {
                  setLoginModalOpen(false);
                  toggleLoginAndRegistrationModal('register');
                  setRegisterModalOpen(true);
                }}
              >
                Sign up
              </span>
            </p>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container xl={12} lg={12} justifyContent='center'>
          <Button
            variant='contained'
            color='primary'
            style={{
              borderRadius: '10px',
              padding: '0.5rem 3rem',
              textTransform: 'capitalize',
            }}
            onClick={() => setLoginModalOpen(false)}
          >
            Login
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
