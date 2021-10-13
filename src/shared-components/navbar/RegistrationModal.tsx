import React, { Dispatch, SetStateAction } from 'react';
import deleteIcon from '../../static/icons/delete.svg';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';

interface IPROPS {
  RegisterModalOpen: boolean;
  setRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  toggleLoginAndRegistrationModal: Dispatch<SetStateAction<string>>;
}

const RegistrationModal = ({
  RegisterModalOpen,
  setRegisterModalOpen,
  toggleLoginAndRegistrationModal,
  setLoginModalOpen,
}: IPROPS) => {
  return (
    <Dialog open={RegisterModalOpen} disableEscapeKeyDown={true} maxWidth='xl'>
      <Grid container justifyContent='flex-end' paddingRight={2} paddingTop={2}>
        <img
          src={deleteIcon}
          alt='close img'
          style={{
            cursor: 'pointer',
          }}
          onClick={() => {
            setRegisterModalOpen(false);
          }}
        />
      </Grid>
      <DialogTitle style={{ padding: '1.5rem 3rem' }}>
        <Grid container justifyContent='space-between'>
          <Grid item lg={12} xl={12} textAlign='center'>
            <h3>Welcome to Joblify!</h3>
            <p style={{ fontSize: '14px' }}>
              Please enter your details to signup
            </p>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid item xl={6} lg={6}>
            <p
              style={{
                fontWeight: 'bold',
                paddingTop: '1rem',
                marginBottom: '10px',
              }}
            >
              First Name
            </p>
            <input className='login-input' type='text' />
          </Grid>
          <Grid item xl={6} lg={6}>
            {' '}
            <p
              style={{
                fontWeight: 'bold',
                paddingTop: '1rem',
                marginBottom: '10px',
              }}
            >
              Last Name
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
              Email
            </p>
            <input
              className='login-input'
              style={{ width: '98%' }}
              type='text'
            />
          </Grid>
          <Grid item xl={6} lg={6}>
            <p
              style={{
                fontWeight: 'bold',
                paddingTop: '1rem',
                marginBottom: '10px',
              }}
            >
              Password
            </p>
            <input className='login-input' type='password' />
          </Grid>
          <Grid item xl={6} lg={6}>
            {' '}
            <p
              style={{
                fontWeight: 'bold',
                paddingTop: '1rem',
                marginBottom: '10px',
              }}
            >
              Confirm password
            </p>
            <input className='login-input' type='password' />
          </Grid>
          <Grid item marginTop={3}>
            <p>
              Already have an account?{' '}
              <span
                style={{
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  color: '#4640de',
                }}
                onClick={() => {
                  setLoginModalOpen(true);
                  toggleLoginAndRegistrationModal('Login');
                  setRegisterModalOpen(false);
                }}
              >
                Login
              </span>
            </p>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container xl={12} lg={12} justifyContent='center'>
          <Grid item xl={12} lg={12} textAlign='center'>
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
                marginBottom: '1rem',
              }}
              onClick={() => setRegisterModalOpen(false)}
            >
              SignUp
            </Button>
          </Grid>
          <Grid item xl={12} lg={12} textAlign='center'>
            <p>
              By signing up you agree to the Terms & Conditions and the Privacy
              Policy requirments.
            </p>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default RegistrationModal;
