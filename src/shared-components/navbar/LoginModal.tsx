import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import deleteIcon from '../../static/icons/delete.svg';
import { useMutation, useQueryClient } from 'react-query';
import { BASE_URL } from '../../utils/endpoints';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginUser } from '../../features/Authentication/authSlice';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

interface IPROPS {
  LoginModalOpen: boolean;
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>;
  setRegisterModalOpen: Dispatch<SetStateAction<boolean>>;
  toggleLoginAndRegistrationModal: Dispatch<SetStateAction<string>>;
}

interface LoginUser {
  email: string;
  password: string;
}

const LoginModal = ({
  LoginModalOpen,
  setLoginModalOpen,
  toggleLoginAndRegistrationModal,
  setRegisterModalOpen,
}: IPROPS) => {
  const test: string = process.env.REACT_APP_JWTSECRET as string;
  let history = useHistory();
  //functions
  const LoginUser = async (formData: LoginUser) => {
    const response = await axios.post(`${BASE_URL}login`, formData);
    return response.data;
  };

  const dispatch = useAppDispatch();
  const mutation = useMutation(LoginUser, {
    onSuccess: (data: any) => {
      localStorage.setItem('token', data.token);
      dispatch(loginUser(data));
      setLoginModalOpen(false);

      const decoded = jwt_decode(data.token);
      const strDecoded = JSON.stringify(decoded);

      localStorage.setItem('userType', JSON.parse(strDecoded).userInfo.type);

      localStorage.getItem('userType') === 'Hr'
        ? history.push('/hr-applications')
        : history.push(history.location.pathname);

      history.push(history.location.pathname);
    },
    onError: () => {},
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setLoginData({
      email: '',
      password: '',
    });

    mutation.mutate(loginData);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  //States
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginData;

  return (
    <Dialog
      open={LoginModalOpen}
      disableEscapeKeyDown={true}
      maxWidth='xl'
      BackdropProps={{
        style: {
          backdropFilter: 'blur(15px)',
          background: 'rgba(196, 196, 196, 0.5)',
        },
      }}
    >
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
        <form onSubmit={handleSubmit}>
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
              <input
                className='login-input'
                type='text'
                required
                onChange={onChange}
                name='email'
                value={email}
              />
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
              <input
                className='login-input'
                type='password'
                required
                onChange={onChange}
                name='password'
                value={password}
              />
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
          <Grid
            container
            xl={12}
            lg={12}
            justifyContent='center'
            marginBottom={4}
            marginTop={4}
          >
            <Button
              variant='contained'
              color='primary'
              style={{
                borderRadius: '10px',
                padding: '0.5rem 3rem',
                textTransform: 'capitalize',
              }}
              type='submit'
            >
              Login
            </Button>
          </Grid>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
